import { Component } from '@angular/core';
import { StatusOverviewService } from './status-overview.service';
import { Status } from './status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private status: Status = undefined;

    constructor (private service: StatusOverviewService) {
        service.getObservable().subscribe(
            status => this.status = status,
            error => console.log("error getting data")
        );
    }
}
