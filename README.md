# Instalação do Nasajon Ui Mobile

## 1. Adicionar pacote via yarn

Na pasta raiz do seu projeto, execute o comando yarn add nasajon/nasajon-ui-mobile@[Versão]

Exemplo:
```
yarn add nasajon/nasajon-ui-mobile@v1.0.0
```

## 2. Importar o módulo
No seu módulo, adicione ao `imports` o módulo nasajon `NasajonAppUiModule`.

Exemplo:
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ClienteProvider } from '../providers/cliente/cliente';

//Importando módulo do Nasajon UI Mobile
import { NasajonAppUiModule } from 'nasajon-ui-mobile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,    
    IonicModule.forRoot(MyApp),

    //Adicionando o módulo do Nasajon UI Mobile no meu módulo
    NasajonAppUiModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClienteProvider
  ]
})
export class AppModule {}
```

## 3. Verifique a documentação do componente que deseja utilizar.
1. [Select com filtros](documentacao/NsjAppUiSelect.md)