import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProdutoPage } from '../pages/produto/produto';
import { ProdutoListPage } from '../pages/produto-list/produto-list';
import { ProdutoEditarPage } from '../pages/produto-editar/produto-editar';
import { ProdutoDetalhePage } from '../pages/produto-detalhe/produto-detalhe';
import { ClientePage } from '../pages/cliente/cliente';
import { ClienteListPage } from '../pages/cliente-list/cliente-list';
import { ClienteEditarPage } from '../pages/cliente-editar/cliente-editar';

import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA-fc0R6_OLS0hkeCf2uasB3ND-_cxaebo",
    authDomain: "lojacomercialapp.firebaseapp.com",
    databaseURL: "https://lojacomercialapp.firebaseio.com",
    projectId: "lojacomercialapp",
    storageBucket: "lojacomercialapp.appspot.com",
    messagingSenderId: "856899363315"
  };

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  pagesLoja: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    //firebase.initializeApp(config);

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Principal', component: HomePage },
//      { title: 'Produto', component: ProdutoPage },
//      { title: 'Cliente', component: ClientePage },
      { title: 'Produto', component: ProdutoListPage },
      { title: 'Cliente', component: ClienteListPage }
    ];

    this.pagesLoja = {
      homePage: HomePage,
      produtoListPage: ProdutoListPage,
      clienteListPage: ClienteListPage,
    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
