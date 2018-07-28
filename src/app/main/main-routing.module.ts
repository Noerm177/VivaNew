import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainGuard } from './main.guard';

// COMPONENTS
import { MainComponent } from './main.component';

// MODULES
import { BusinessUnitModule } from '../crud-modules/catalogs/business-unit/business-unit.module';
import { BusinessUnitMainModule } from '../crud-modules/catalogs/business-unit-main/business-unit-main.module';
import { ActivitiesModule } from '../crud-modules/catalogs/activities/activities.module';

// EXTERNAL COMPONENTS
import { UsersModule } from '../crud-modules/catalogs/users/users.module';
import { ProfileUsersComponent } from '../crud-modules/profile-users/profile-users.component';
import { CropsModule } from '../crud-modules/catalogs/crops/crops.module';
import { GroundModule } from '../crud-modules/catalogs/ground/ground.module';
import { PackagingModule } from '../crud-modules/catalogs/packaging/packaging.module';
import { IncidentsModule } from '../crud-modules/catalogs/incidents/incidents.module';
import { PresentationsModule } from '../crud-modules/catalogs/presentations/presentations.module';

import { OperationsModule } from '../crud-modules/operations/operations.module';

const mainRoutes: Routes = [
    {
      path: '',
      component: MainComponent,
      canActivate: [MainGuard],
        children: [
          { path: 'business-unit', loadChildren: () =>  BusinessUnitModule },
          { path: 'business-unit-detail/:id', loadChildren: () => BusinessUnitMainModule},
          { path: 'activities', loadChildren: () => ActivitiesModule },
          { path: 'users', loadChildren: () =>  UsersModule },
          { path: 'profile', component: ProfileUsersComponent },
          { path: 'crops', loadChildren: () => CropsModule },
          { path: 'ground', loadChildren: () => GroundModule },
          { path: 'incidents', loadChildren: () => IncidentsModule },
          { path: 'presentations', loadChildren: () => PresentationsModule },
          { path: 'packaging', loadChildren: () => PackagingModule },
          { path: 'operations', loadChildren: () => OperationsModule }
        ]
    },

];

    @NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
