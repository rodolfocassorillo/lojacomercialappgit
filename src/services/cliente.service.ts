import { Injectable } from '@angular/core';

import { Cliente } from '../model/cliente';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class ClienteService {
  itemsCollection: AngularFirestoreCollection<Cliente> = this.afs.collection<Cliente>('cliente');

  constructor(private afs: AngularFirestore) {

  }

  getClientes() {
    return this.itemsCollection;
  }

  addCliente(cliente: Cliente) {
    const id = this.afs.createId();
    cliente.key = id;
    this.itemsCollection.doc(id).set(JSON.parse(JSON.stringify(cliente)));
  }

  updateCliente(cliente: Cliente) {
    return this.itemsCollection.doc(cliente.key).update(cliente);
  }

  removeCliente(cliente: Cliente) {
    return this.itemsCollection.doc(cliente.key).delete();
  }

}
