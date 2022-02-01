import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { PrintAnimalComponent } from './components/print-animal/print-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    PrintAnimalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
