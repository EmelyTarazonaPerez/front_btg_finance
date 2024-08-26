import { Component } from '@angular/core';
import { ClientService } from './admin/service/client-service.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.clientService.getUser().subscribe(resp => {
      console.log("usuario conectado:" + resp)
    })

  }
}
