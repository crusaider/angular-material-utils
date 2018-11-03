import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { SortedTableModule } from 'ngmat-sorted-table';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    SortedTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
