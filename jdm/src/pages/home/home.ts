import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlunosPage } from "../alunos/alunos";
import { EventosPage } from "../eventos/eventos";
import { NoticiasPage } from "../noticias/noticias";
import { ProfessoresPage } from "../professores/professores";
import { ImagensPage } from "../imagens/imagens";
import { SobrePage } from "../sobre/sobre";
import { LocalizacaoPage } from "../localizacao/localizacao";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  public alunos() {
    this.navCtrl.push(AlunosPage);
  }
    
  public eventos() {
    this.navCtrl.push(EventosPage);
  }
  
  public noticias(){
    this.navCtrl.push(NoticiasPage)
  }

  public professores(){
    this.navCtrl.push(ProfessoresPage)
  }

  public imagens(){
    this.navCtrl.push(ImagensPage)
  }

  public sobre(){
    this.navCtrl.push(SobrePage)
  }

  public localizacao(){
    this.navCtrl.push(LocalizacaoPage)
  }
}
