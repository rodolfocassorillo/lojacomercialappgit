import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteEditarPage } from './cliente-editar';

@NgModule({
  declarations: [
    ClienteEditarPage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteEditarPage),
  ],
})
export class ClienteEditarPageModule {}
