import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DollarinputComponent } from './dollarinput/dollarinput.component';
import { NuggetDisplayComponent } from './nugget-display/nugget-display.component';
import { NuggetSetDisplayComponent } from './nugget-set-display/nugget-set-display.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DollarinputComponent,
    NuggetDisplayComponent,
    NuggetSetDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
