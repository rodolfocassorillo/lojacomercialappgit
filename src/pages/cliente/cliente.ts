import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { ClienteListPage } from '../cliente-list/cliente-list';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { ToastController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage {

  private cliente: Cliente = new Cliente();

  items: Observable<Cliente[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private clienteService: ClienteService, public toastCtrl: ToastController, private admobFree: AdMobFree) {
    this.items = this.clienteService.getClientes().valueChanges();
    this.mostrarPubInterstitial();
  }

  converterNumber(numero): number {
    return parseFloat(numero);
  }

  cadastrarCliente() {
    this.clienteService.addCliente(this.cliente);

    const toast = this.toastCtrl.create({
      message: 'Cadastrado com sucesso',
      duration: 3000
    });
    toast.present();

    this.navCtrl.pop();

  }

  mostrarPubInterstitial(){
    const interstitialConfig: AdMobFreeInterstitialConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      id: 'ca-app-pub-3940256099942544/1033173712',
      isTesting: true,
      autoShow: true
    };
    this.admobFree.interstitial.config(interstitialConfig);

    this.admobFree.interstitial.prepare()
    .then(() => {
      // banner Ad is ready
      // if we set autoShow to false, then we will need to call the show method here
    })
    .catch(e => console.log(e));
  }

  fechar(){
    this.navCtrl.pop();
  }

  editarRemover(clienteEditarRemover: Cliente) {
    this.navCtrl.push(ClientePage, { cliente: clienteEditarRemover });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientePage');
  }

}
