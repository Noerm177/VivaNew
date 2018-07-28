import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MATERIAL MODULE
import { MaterialModule } from './material.module';

// COMPONENTS
import { InvasiveLoaderComponent } from './components/invasive-loader/invasive-loader.component';
import { MessageBarComponent } from './components/message-bar/message-bar.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { MapComponent } from './components/map/map.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { BreadcrumComponent } from './components/breadcrum/breadcrum.component';
import { BreadcrumbTabsComponent } from './components/breadcrumb-tabs/breadcrumb-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    InvasiveLoaderComponent,
    MessageBarComponent,
    MapComponent,
    SearchInputComponent,
    BreadcrumComponent,
    BreadcrumbTabsComponent
  ],
  declarations: [
    InvasiveLoaderComponent,
    MessageBarComponent,
    ConfirmDialogComponent,
    MapComponent,
    SearchInputComponent,
    BreadcrumComponent,
    BreadcrumbTabsComponent,
  ],
  entryComponents: [ConfirmDialogComponent]
})
export class CoreModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // sidenav
    iconRegistry.addSvgIcon('agroanalitica', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/agroa.svg'));
    iconRegistry.addSvgIcon('rendimiento', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/rendimiento.svg'));
    iconRegistry.addSvgIcon('actividad', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/actividad.svg'));
    iconRegistry.addSvgIcon('catologos', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/open-folder.svg'));
    iconRegistry.addSvgIcon('productividad', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/updates.svg'));
    // catalogs
    iconRegistry.addSvgIcon('nodos', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/pornodo.svg'));
    iconRegistry.addSvgIcon('borrar', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/borrar.svg'));
    iconRegistry.addSvgIcon('flecha-der', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/arr_left.svg'));
    iconRegistry.addSvgIcon('flecha-izq', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/arr_right.svg'));
    // activities
    iconRegistry.addSvgIcon('alinear', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/alinear_planta.svg'));
    iconRegistry.addSvgIcon('apuntador', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/apuntador.svg'));
    iconRegistry.addSvgIcon('planta-bajar', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/bajar_planta.svg'));
    iconRegistry.addSvgIcon('canaleta-barrer', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/barrer_canaleta.svg'));
    iconRegistry.addSvgIcon('planta-capar', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/capar_planta.svg'));
    iconRegistry.addSvgIcon('broto-capar', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/capar_broto.svg'));
    iconRegistry.addSvgIcon('rastrear', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/rastrear.svg'));
    // Inputs
    iconRegistry.addSvgIcon('ok', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/OK.svg'));
  }
}
