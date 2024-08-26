import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideNavegateComponent } from './aside-navegate/aside-navegate.component';


@NgModule({
  declarations: [
    AsideNavegateComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    AsideNavegateComponent
  ]
})
export class ShareModule { }
