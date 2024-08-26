import { Component } from '@angular/core';
import { UserInterface } from 'src/app/admin/interface/UserInterface';
import { ClientService } from 'src/app/admin/service/client-service.service';

@Component({
  selector: 'app-aside-navegate',
  templateUrl: './aside-navegate.component.html',
  styleUrls: ['./aside-navegate.component.scss']
})
export class AsideNavegateComponent {
  profile!: UserInterface | null;

  constructor(private clienteService: ClientService){}

  ngOnInit(){
    this.clienteService.$myProfile.subscribe(data => this.profile =data)
  }
}
