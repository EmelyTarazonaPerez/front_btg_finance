import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { ClientService } from '../../service/client-service.service';
import { FundInterface } from '../../interface/FundInterface';
import { ResponseModel } from '../../interface/ResponseModel';
import { UserInterface } from '../../interface/UserInterface';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent {
  fundsList!: FundInterface[];
  funInput!: FundInterface;
  modalState: boolean = false;
  response!: ResponseModel | null;
  profile!: UserInterface | null;

  // Mover a Utils
  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  constructor(
    private clientService: ClientService,
  ) { }

  ngOnInit() {
    this.clientService.getFunds().subscribe(data => this.fundsList = data)
    this.clientService.$myProfile.subscribe(data => this.profile = data)
  }

  openModal(obj: FundInterface) {
    console.log(this.modalState)
    this.funInput = obj;
    this.modalState = !this.modalState
  }

  closeModal($event: boolean) {
    this.modalState = false;
    this.response = null;
  }

  reloadUser() {
    this.clientService.getUser().subscribe(() =>
      this.clientService.$myProfile.subscribe(data => this.profile = data)
    );
  }

  handleAmountOutput(amount: number) {
    this.clientService.getSubscribe(this.funInput.id, amount)
      .subscribe(data => {
        this.response = data;
        this.reloadUser();

        alert(`Suscrito correctamente al Fondo ${this.funInput.name} con un monton de ${this.formatter.format(amount)}`);
      });
  }
}
