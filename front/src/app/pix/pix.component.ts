import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  transacao = {
    nome: '',
    valor: 0,
    chave: ''
  };
  mensagem: string | null = null;
  mensagemSeverity: string = '';

  enviarPix() {
    if (this.transacao.valor <= 0) {
      this.mensagem = 'Por favor, insira um valor válido.';
      this.mensagemSeverity = 'error';
      return;
    }

    this.processarPix(this.transacao).then((response) => {
      this.mensagem = 'Transação Pix enviada com sucesso!';
      this.mensagemSeverity = 'success';
      this.resetarFormulario();
    }).catch((error) => {
      this.mensagem = 'Erro ao enviar a transação: ' + error.message;
      this.mensagemSeverity = 'error';
    });
  }

  processarPix(transacao: any): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (transacao.chave) {
          resolve({ status: 'success' });
        } else {
          reject(new Error('Chave inválida'));
        }
      }, 2000);
    });
  }

  resetarFormulario() {
    this.transacao = { nome: '', valor: 0, chave: '' };
  }
}