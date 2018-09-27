import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { Produto } from '../../model/produto';
import { ProdutoService } from '../../services/produto.service';
import { ProdutoListPage } from '../produto-list/produto-list';
import { ProdutoEditarPage } from '../produto-editar/produto-editar';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { ToastController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  private produto: Produto = new Produto();

  items: Observable<Produto[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private produtoService: ProdutoService, public toastCtrl: ToastController, private admobFree: AdMobFree) {
    this.items = this.produtoService.getProdutos().valueChanges();
    this.mostrarPubInterstitial();
  }

  converterNumber(numero): number {
    return parseFloat(numero);
  }

  cadastrarProduto() {
    this.produtoService.addProduto(this.produto);

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoPage');
  }

}
