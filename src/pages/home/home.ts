import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { Produto } from '../../model/produto';
import { ProdutoPage } from '../produto/produto';
import { ProdutoService } from '../../services/produto.service';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private platform: Platform, private admobFree: AdMobFree) {
    this.mostrarPubBanner();
  }

  converterNumber(numero): number {
    return parseFloat(numero);
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

  // this.file.checkDir(this.file.externalDataDirectory, 'lojaComercial')
  //   .then(_ => console.log('Directory exists'))
  //   .catch(err => {.log('Directory doesnt exist');
  //     this.file.createDir(this.file.externalDataDirectory,"lojaComercial",true);
  //     this.file.createDir(this.file.externalDataDirectory,"lojaComercial/fotosProdutos",true);
  //   });

  }
