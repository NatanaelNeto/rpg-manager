import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertModel } from 'src/app/models/alert-model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  panel: BehaviorSubject<AlertModel | null> = new BehaviorSubject<AlertModel | null>(null);
  timeout: ReturnType<typeof setTimeout>;

  constructor() { }

  getPanelInfo(): Observable<AlertModel | null> {
    return this.panel.asObservable();
  }

  openPanel(alert: AlertModel) {
    this.timeout = setTimeout(() => this.closePanel(), 4000);
    this.panel.next(alert);
  }

  closePanel() {
    clearTimeout(this.timeout);
    this.panel.next(null);
  }
}
