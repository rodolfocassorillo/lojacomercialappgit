import { Injectable } from '@angular/core';

import { Produto } from '../model/produto';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class ProdutoService {
  itemsCollection: AngularFirestoreCollection<Produto> = this.afs.collection<Produto>('produto');

  constructor(private afs: AngularFirestore) {

  }

  getProdutos() {
    return this.itemsCollection;
  }

  getProdutosByKey(produto: Produto) {
    const id = this.afs.createId();
    produto.key = id;
    return this.itemsCollection.doc(id).set(JSON.parse(JSON.stringify(produto)));
  }

  addProduto(produto: Produto) {
    const id = this.afs.createId();
    produto.key = id;
    this.itemsCollection.doc(id).set(JSON.parse(JSON.stringify(produto)));
  }

  updateProduto(produto: Produto) {
    return this.itemsCollection.doc(produto.key).update(produto);
  }

  removeProduto(produto: Produto) {
    return this.itemsCollection.doc(produto.key).delete();
  }

}
