import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// CORE
import { CoreModule } from '../../../core/core.module';

import { GroundRoutingModule } from './ground-routing.module';
import { GroundComponent } from './ground.component';
import { GroundListComponent } from './ground-list/ground-list.component';
import { GroundFormComponent } from './ground-form/ground-form.component';
import { GroundDetailComponent } from './ground-detail/ground-detail.component';

@NgModule({
  imports: [
    CommonModule,
    GroundRoutingModule,
    CoreModule
  ],
  declarations: [GroundComponent, GroundListComponent, GroundFormComponent, GroundDetailComponent]
})
export class GroundModule { }
