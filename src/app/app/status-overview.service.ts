import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

import { Status } from './status';

@Injectable()
export class StatusOverviewService {
    private observable: Observable<Status>;

    constructor(private http: Http) {
        this.observable = this.http.get('/assets/data.json')
            .map(res => new Status(res.json()));
    }

    public getObservable(): Observable<Status> {
        return this.observable;
    }
}
