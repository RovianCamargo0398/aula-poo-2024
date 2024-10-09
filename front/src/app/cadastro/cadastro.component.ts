import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Correntista } from '../../model/correntista';
import { CorrentistaService } from '../correntista.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  public dadosCadastrais = new Correntista();

  constructor(
    private service: CorrentistaService
  ) {}

  clickSalvar(): void {
    this.service.cadastrar(this.dadosCadastrais).subscribe ( resposta => {
      alert("Cadastrado com sucesso!");
    })
  }

}