import { BrowserModule, } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule} from './MaterialModule';
import { TransactionViewComponent } from './transaction-view/transaction-view.component'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TransactionViewComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
