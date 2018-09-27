import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Produto } from '../../model/produto';
import { ProdutoService } from '../../services/produto.service';
import { ProdutoPage } from '../produto/produto';
import { ProdutoListPage } from '../produto-list/produto-list';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-produto-editar',
  templateUrl: 'produto-editar.html',
})
export class ProdutoEditarPage {

  private produto: Produto = new Produto();

  constructor(public navCtrl: NavController, public navParams: NavParams, private produtoService: ProdutoService, public toastCtrl: ToastController, public alertCtrl: AlertController ) {
    this.produto = this.navParams.get("produto");
  }

  converterNumber(numero): number {
    return parseFloat(numero);
  }

  alterarProduto() {
      this.produtoService.updateProduto(this.produto);
      this.navCtrl.pop();

      const toast = this.toastCtrl.create({
        message: 'Alterado com sucesso',
        duration: 3000
      });
      toast.present();

    }

  removerProduto() {
      this.produtoService.removeProduto(this.produto);
      this.navCtrl.pop();

      const toast = this.toastCtrl.create({
        message: 'Removido com sucesso',
        duration: 3000
      });
      toast.present();

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoEditarPage');
  }

  showConfirmExcluir() {
    const confirm = this.alertCtrl.create({
      title: 'Excluir Produto',
      message: 'Tem certeza que deseja remover esse produto?',
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
            this.removerProduto();
          }
        }
      ]
    });
    confirm.present();
  }

}
