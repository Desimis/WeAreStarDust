import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  exports: [CoreRoutingModule, HeaderComponent, FooterComponent]
})
export class CoreModule { }
