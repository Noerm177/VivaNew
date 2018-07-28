import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

// MODULES
import { AuthenticationModule } from './authentication/authentication.module';
import { MainModule } from './main/main.module';

// COMPONENTS
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ConnectionErrorComponent } from './pages/connection-error/connection-error.component';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';

const routes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => AuthenticationModule },
    { path: 'main', loadChildren: () => MainModule },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'conexion', component: ConnectionErrorComponent },
    { path: 'access-denied', component: AccessDeniedComponent },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
