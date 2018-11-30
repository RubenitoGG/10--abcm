import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingItem } from './../../models/shopping-item/shopping-item.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// *.18 Genero este servicio con '>ionic g provider ListaCompra':

@Injectable()
export class ListaCompraProvider {

  // *.20 Creamos la referencia de la lista:
  private refListaCompra = this.db.list<ShoppingItem>('listaCompra');

  // *.19 Inyectamos un AngularFireDatabase:
  constructor(private db: AngularFireDatabase) {

  }

  // *.21 Subo el item a la BBDD:
  addItem(item: ShoppingItem) {
    return this.refListaCompra.push(item);
  }

  // *.24:
  getItemList() {
    return this.refListaCompra;
  }

  // *.35:
  editItem(item: ShoppingItem){
    return this.refListaCompra.update(item.$key, item);
  }
}
