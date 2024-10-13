import { Routes } from '@angular/router';
import { CadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaExtratoComponent } from './tela-extrato/tela-extrato.component';
import { TelaPixComponent } from './pix/tela-pix.component';
import { LoginComponent } from './login/login.component';
import { TelaInicialComponent } from './telainicial/tela-inicial.component';


export const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'tela-inicial', component: TelaInicialComponent},
    { path: 'tela-cadastro', component: CadastroComponent},
    { path: 'tela-extrato', component: TelaExtratoComponent},
    { path: 'tela-pix', component: TelaPixComponent},
    {path: 'tela-login', component: LoginComponent}
];