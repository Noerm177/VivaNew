import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// CORE
import { CoreModule } from '../../../core/core.module';

import { PresentationsRoutingModule } from './presentations-routing.module';
import { PresentationsComponent } from './presentations.component';
import { PresentationsListComponent } from './presentations-list/presentations-list.component';
import { PresentationsFormComponent } from './presentations-form/presentations-form.component';
import { PresentationsDetailComponent } from './presentations-detail/presentations-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PresentationsRoutingModule,
    CoreModule
  ],
  declarations: [PresentationsComponent, PresentationsListComponent, PresentationsFormComponent, PresentationsDetailComponent]
})
export class PresentationsModule { }
