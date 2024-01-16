import { Component } from '@angular/core';
import { AlertService } from './alert.service';
import { AlertModel } from 'src/app/models/alert-model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {

  alert: AlertModel | null = {
    state: false,
    message: '',
    type: 'error'
  }
  constructor(private alertService: AlertService) {
    this.alertService.getPanelInfo().subscribe(a => this.alert = a);
  }

  closePanel() {
    this.alertService.closePanel();
  }
}
