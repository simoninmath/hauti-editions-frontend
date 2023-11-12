/* import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
})
export class NewAccountComponent {
  // Communication with Parent Component and create new Event
  @Output() accountAdded = new EventEmitter<{
    accountName: string;
    accountStatus: string;
  }>();

  onCreatAccount() {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    });

    // Create the Service
    const service = new LoggingService();
    service.logStatusChange(accountStatus);
    // console.log('Le statut a changé. Nouveau statut : ' + accountStatus);
  }
}
 */