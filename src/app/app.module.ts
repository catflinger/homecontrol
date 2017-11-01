import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StatusOverviewService } from './app/status-overview.service';

import { AppComponent } from './app/app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [StatusOverviewService],
    bootstrap: [AppComponent]
})
export class AppModule { }
