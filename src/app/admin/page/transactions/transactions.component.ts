import { Component } from '@angular/core';
import { TransactionInterface } from '../../interface/TransactionInterface';
import { ClientService } from '../../service/client-service.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  transactionInterface!: TransactionInterface[]

  constructor(
    private clientService: ClientService,
  ) { }

  ngOnInit() {
    this.clientService.getTransactions().subscribe(
      (data) => this.transactionInterface = data
    );
  }
}
