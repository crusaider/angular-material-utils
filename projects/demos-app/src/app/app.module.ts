import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OverlaySpinnerDemoModule } from './overlay-spinner-demo/overlay-spinner-demo.module';
import { SortedTableDemoModule } from './sorted-table-demo/sorted-table-demo.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule
} from '@angular/material';
import { HomeComponent } from './navigation/home/home.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SortedTableDemoModule,
    MatMenuModule,
    OverlaySpinnerDemoModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
