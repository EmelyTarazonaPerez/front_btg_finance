import { Component } from '@angular/core';
import { ClientService } from '../../service/client-service.service';
import { TransactionInterface } from '../../interface/TransactionInterface';
import { UserInterface } from '../../interface/UserInterface';
import { FundInterface } from '../../interface/FundInterface';

@Component({
  selector: 'app-porfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PorfolioComponent {
  transactionInterface!: TransactionInterface[]
  transactionInput!: TransactionInterface;
  profile!: UserInterface | null;
  modalState: boolean = false;

  constructor(
    private clientService: ClientService,
  ) { }

  ngOnInit() {
    this.clientService.getTransactions().subscribe(
      (data) => this.transactionInterface = data.filter(fund => fund.active === true)
    );
    this.clientService.$myProfile.subscribe(data => this.profile = data)
  }

  reload() {
    this.clientService.getTransactions().subscribe(
      (data) => this.transactionInterface = data.filter(fund => fund.active === true)
    );
    this.clientService.getUser().subscribe(() =>
      this.clientService.$myProfile.subscribe(data => this.profile = data)
    );
  }

  openModal(obj: TransactionInterface) {
    this.transactionInput = obj;
    this.modalState = !this.modalState
  }

  closeModal($event: boolean) {
    this.modalState = false;
  }

  handleCancelFund(transactionId: string) {
    this.clientService.unsubscribeFund(transactionId).subscribe(() => {
      this.reload();
      alert(`Cancelo correctamente Suscripcion al Fondo ${this.transactionInput.fund.name} con el ID ${this.transactionInput.id}`);
    });
  }
}
