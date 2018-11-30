import { ListaCompraProvider } from './../../providers/lista-compra/lista-compra';
import { ShoppingItem } from './../../models/shopping-item/shopping-item.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular'

/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

  // *.32:Añadir el item:
  item: ShoppingItem;

  // *.36 Inyecto el servicio:
  constructor(public navCtrl: NavController, public navParams: NavParams, private servicioListaCompra: ListaCompraProvider, private toast: ToastController) {
    console.log(navParams.get("item"))
    // *.33 Asignamos los datos que me llegan:
    this.item = navParams.get("item");
  }

  // *.37:
  guardarItem(item: ShoppingItem) {
    this.servicioListaCompra.editItem(item)
      .then(() => {
        this.navCtrl.setRoot("HomePage");
        this.mensaje("Item cambiado");
      });
  }

  // *.40:
  borrarItem(item: ShoppingItem) {
    this.servicioListaCompra.deleteItem(item)
      .then(() => {
        this.navCtrl.setRoot("HomePage");
        this.mensaje("Item borrado");
      });
  }

  // *.41 Mensajes toasts en borrar y editar:
  mensaje(texto: string) {
    const toast = this.toast.create({
      message: texto,
      duration: 3000
    });

    toast.present();
  }
}
