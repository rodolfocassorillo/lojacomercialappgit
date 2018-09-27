import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ClientePage } from '../cliente/cliente';
import { ClienteEditarPage } from '../cliente-editar/cliente-editar';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@IonicPage()
@Component({
  selector: 'page-cliente-list',
  templateUrl: 'cliente-list.html',
})
export class ClienteListPage {

  private cliente: Cliente = new Cliente();

  items: Observable<Cliente[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private clienteService: ClienteService, public toastCtrl: ToastController, private admobFree: AdMobFree) {
    this.items = this.clienteService.getClientes().valueChanges();
    this.mostrarPubBanner();
  }

  editarRemover(clienteEditarRemover: Cliente) {
    this.navCtrl.push(ClienteEditarPage, { cliente: clienteEditarRemover });
  }

  openClientePage(){
     this.navCtrl.push(ClientePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClienteListPage');
  }

  mostrarPubBanner(){
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      id: 'ca-app-pub-3940256099942544/6300978111',
      isTesting: true,
      autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare()
    .then(() => {
      // banner Ad is ready
      // if we set autoShow to false, then we will need to call the show method here
    })
    .catch(e => console.log(e));
  }

}
