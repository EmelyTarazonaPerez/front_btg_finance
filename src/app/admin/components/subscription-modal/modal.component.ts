import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FundInterface } from '../../interface/FundInterface';
import { ResponseModel } from '../../interface/ResponseModel';
import { ClientService } from '../../service/client-service.service';
import { UserInterface } from '../../interface/UserInterface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() funInput!: FundInterface;
  @Input() response!: ResponseModel | null;

  @Output() amountOutput = new EventEmitter<number>();
  @Output() modalState = new EventEmitter<boolean>();

  amount:number = 0;
  profile: UserInterface = {} as UserInterface;
  isAmountError: boolean = false;

  constructor(private clienteService: ClientService){}

  ngOnInit() {
    this.clienteService.$myProfile.subscribe(data => this.profile = data || {} as UserInterface)
    this.amount = this.funInput?.min_amount || 0;
    this.changeAmount();
  }

  changeAmount() {
    this.isAmountError = this.amount < this.funInput.min_amount || this.amount > this.profile.availableCash;
  }

  emitAmount() {
    if (this.amount < this.funInput.min_amount) {
      this.isAmountError = true;
    } else {
      this.amountOutput.emit(this.amount)
      this.closeModal();
    }
  }

  closeModal() {
    this.modalState.emit(false)
  }
}
