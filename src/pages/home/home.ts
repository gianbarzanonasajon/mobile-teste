import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Importaçãoes de teste
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public addForm: FormGroup;

  configLayout: any[] = [
    {
      descr: "Nome: ",
      campo: "nome"
    }
  ];
  
  filtrosCliente: any[] = [
    {
      id: 0,
      valor: "",
      tpComponente: "ion-searchbar",
      tpFiltro: "contemTexto",
      campos: ["nome","uf"],
      principal: true,
      dados: {placeholder: "Buscar.."}
    },
    {
      id: 1,
      valor: "RJ",
      tpComponente: "ion-input",
      tpFiltro: "comparaValor",
      campos: ["uf"],
      principal: false,
      dados: {label: "UF", placeholder: ""}        
    },
    {
      id: 2,
      valor: ['pj', 'pf'],
      tpComponente: "ion-select-check",
      tpFiltro: "comparaValor",
      campos: ["tipoPessoa"],
      principal: false,
      dados: {
        label: "Tipo Pessoa: ",
        okText: "Selecionar",
        cancelText: "Cancelar", 
        options: [
          {
            valor: 'pf',
            texto: 'Pessoa Física'
          },
          {
            valor: 'pj',
            texto: 'Pessoa Jurídica'
          }
        ]}
    }
  ];

  constructor(
    public navCtrl: NavController,
    public _formBuilder: FormBuilder) {
      this.addForm = this._formBuilder.group({
        'cliente': ['', Validators.compose([Validators.required])],
      });      
  }

}
