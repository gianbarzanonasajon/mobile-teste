import { Injectable } from '@angular/core';
import { MdaLocalDBService } from 'nasajon-ui-mobile5';

@Injectable()
export class ClienteProvider extends MdaLocalDBService {
  protected definirChave(){    
    this.chave = 'clientes';
  }  

  protected definirCampoId(){    
    this.campoId = 'codigo';
  }
}
