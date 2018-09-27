import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AdMobFree } from '@ionic-native/admob-free';

import { PhotoViewer } from '@ionic-native/photo-viewer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProdutoPage } from '../pages/produto/produto';
import { ProdutoListPage } from '../pages/produto-list/produto-list';
import { ProdutoEditarPage } from '../pages/produto-editar/produto-editar';
import { ProdutoDetalhePage } from '../pages/produto-detalhe/produto-detalhe';
import { ClientePage } from '../pages/cliente/cliente';
import { ClienteListPage } from '../pages/cliente-list/cliente-list';
import { ClienteEditarPage } from '../pages/cliente-editar/cliente-editar';

import { ProdutoService } from '../services/produto.service';
import { ClienteService } from '../services/cliente.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA-fc0R6_OLS0hkeCf2uasB3ND-_cxaebo",
    authDomain: "lojacomercialapp.firebaseapp.com",
    databaseURL: "https://lojacomercialapp.firebaseio.com",
    projectId: "lojacomercialapp",
    storageBucket: "lojacomercialapp.appspot.com",
    messagingSenderId: "856899363315"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProdutoPage,
    ProdutoListPage,
    ProdutoEditarPage,
    ProdutoDetalhePage,
    ClientePage,
    ClienteListPage,
    ClienteEditarPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProdutoPage,
    ProdutoListPage,
    ProdutoEditarPage,
    ProdutoDetalhePage,
    ClientePage,
    ClienteListPage,
    ClienteEditarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    PhotoViewer,
    ProdutoService,
    ClienteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
