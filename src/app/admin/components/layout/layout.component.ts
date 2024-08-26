import { Component } from '@angular/core';
import { ClientService } from '../../service/client-service.service';
import { UserInterface } from '../../interface/UserInterface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  profile!: UserInterface | null;

  constructor(private clienteService: ClientService){}

  ngOnInit(){
    this.clienteService.$myProfile.subscribe(data => this.profile =data)
  }
}
