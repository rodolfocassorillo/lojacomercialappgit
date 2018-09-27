import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProdutoPage } from '../produto/produto';
import { ProdutoEditarPage } from '../produto-editar/produto-editar';
import { ProdutoDetalhePage } from '../produto-detalhe/produto-detalhe';
import { Produto } from '../../model/produto';
import { ProdutoService } from '../../services/produto.service';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-produto-list',
  templateUrl: 'produto-list.html',
})
export class ProdutoListPage {

  private produto: Produto = new Produto();

  items: Observable<Produto[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private produtoService: ProdutoService, private photoViewer: PhotoViewer, private admobFree: AdMobFree) {
    this.items = this.produtoService.getProdutos().valueChanges();
    this.mostrarPubBanner();
  }

  buscarProduto(){
  }

  editarRemover(produtoEditarRemover: Produto) {
    this.navCtrl.push(ProdutoEditarPage, { produto: produtoEditarRemover });
  }

  openProdutoPage(){
    this.navCtrl.push(ProdutoPage);
  }

  detalhesProduto(){
    this.navCtrl.push(ProdutoDetalhePage);
  }

  buscarPhoto(){
    this.photoViewer.show('https://i.imgur.com/W03aLAd.jpg', '22', {share: false});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoListPage');
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
