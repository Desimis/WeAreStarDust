import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstrophotographyComponent } from './components/astrophotography/astrophotography.component';
import { AstrophotographyRoutingModule } from './astrophotography-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DialogModalComponent } from '../shared/components/dialog-modal/dialog-modal.component';



@NgModule({
  declarations: [AstrophotographyComponent],
  imports: [
    CommonModule,
    SharedModule,
    AstrophotographyRoutingModule
  ],
  exports: [AstrophotographyRoutingModule],
  entryComponents: [DialogModalComponent]
})
export class AstrophotographyModule { }
