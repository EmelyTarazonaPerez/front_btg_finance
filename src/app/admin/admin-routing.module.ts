import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundComponent } from './page/fund/fund.component';
import { PorfolioComponent } from './page/portfolio/portfolio.component';
import { TransactionsComponent } from './page/transactions/transactions.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'home', component:  FundComponent},
      { path: 'funds', component:  FundComponent},
      { path: 'transactions', component: TransactionsComponent },
      { path: 'portfolio', component: PorfolioComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
