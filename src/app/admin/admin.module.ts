import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { ShareModule } from '../shared/share.module';
import { LayoutComponent } from './components/layout/layout.component';
import { FundComponent} from './page/fund/fund.component';
import { TransactionsComponent } from './page/transactions/transactions.component';
import { PorfolioComponent } from './page/portfolio/portfolio.component';
import { ModalComponent } from './components/subscription-modal/modal.component';
import { CancelFundModalComponent } from './components/cancel-fund-modal/cancel-fund-modal.component';


@NgModule({
  declarations: [
    LayoutComponent,
    FundComponent,
    TransactionsComponent,
    PorfolioComponent,
    ModalComponent,
    CancelFundModalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareModule,
    FormsModule
  ],
  bootstrap: [LayoutComponent]
})
export class AdminModule { }
