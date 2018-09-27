import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { ClienteListPage } from '../cliente-list/cliente-list';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cliente-editar',
  templateUrl: 'cliente-editar.html',
})
export class ClienteEditarPage {

  private cliente: Cliente = new Cliente();

  constructor(public navCtrl: NavController, public navParams: NavParams, private clienteService: ClienteService, public toastCtrl: ToastController, public alertCtrl: AlertController) {
    this.cliente = this.navParams.get("cliente");
  }

  converterNumber(numero): number {
    return parseFloat(numero);
  }

  alterarCliente() {
    this.clienteService.updateCliente(this.cliente);
    this.navCtrl.pop();

    const toast = this.toastCtrl.create({
      message: 'Alterado com sucesso',
      duration: 3000
    });
    toast.present();

  }

  removerCliente() {
    this.clienteService.removeCliente(this.cliente);
    this.navCtrl.pop();

    const toast = this.toastCtrl.create({
      message: 'Removido com sucesso',
      duration: 3000
    });
    toast.present();

  }

  fechar(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClienteEditarPage');
  }

  showConfirmExcluir(){
    const confirm = this.alertCtrl.create({
      title: 'Excluir Cliente',
      message: 'Tem certeza que deseja remover esse cliente?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('não clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('sim clicked');
            this.removerCliente();
          }
        }
      ]
    });
    confirm.present();
  }

}
