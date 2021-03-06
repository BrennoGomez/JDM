import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Imagem } from "../../models/imagem.models";
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { ImagensEditarPage } from "../imagens-editar/imagens-editar";

@IonicPage()
@Component({
  selector: 'page-imagens',
  templateUrl: 'imagens.html',
})
export class ImagensPage {

  novaImagem= {} as Imagem;
  
    Imagem$: FirebaseListObservable<Imagem[]>
  
      constructor(public af: AngularFireDatabase, public navCtrl: NavController,) {
        this.Imagem$ = this.af.list('Imagens');
      }
    
      addImagem(novaImagem: Imagem) {
        
        this.Imagem$.push({
          legenda: this.novaImagem.legenda
        });
  
        this.novaImagem = {} as Imagem;
        this.navCtrl.pop();
      }
  
      editar(){
        this.navCtrl.push(ImagensEditarPage);
      }
  
  }