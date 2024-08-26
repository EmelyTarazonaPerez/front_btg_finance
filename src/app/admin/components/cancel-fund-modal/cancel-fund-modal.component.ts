import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResponseModel } from '../../interface/ResponseModel';
import { ClientService } from '../../service/client-service.service';
import { UserInterface } from '../../interface/UserInterface';
import { TransactionInterface } from '../../interface/TransactionInterface';

@Component({
  selector: 'cancel-fund-modal',
  templateUrl: './cancel-fund-modal.component.html',
  styleUrls: ['./cancel-fund-modal.component.scss']
})
export class CancelFundModalComponent {
  @Input() transactionInput!: TransactionInterface;

  @Output() cancelFund = new EventEmitter<string>();
  @Output() modalState = new EventEmitter<boolean>();

  profile: UserInterface = {} as UserInterface;

  constructor(private clienteService: ClientService){}

  ngOnInit() {
    this.clienteService.$myProfile.subscribe(data => this.profile = data || {} as UserInterface)
  }

  cancelEmit() {
    this.cancelFund.emit(this.transactionInput.id);
    this.closeModal();
  }

  closeModal() {
    this.modalState.emit(false)
  }
}
