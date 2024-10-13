import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent {
  isSaldoVisible: boolean = false; // Inicializa a visibilidade do saldo

  constructor(private router: Router) {}

  toggleSaldo() {
    this.isSaldoVisible = !this.isSaldoVisible; // Alterna a visibilidade do saldo
  }

  extrato() {
    this.router.navigate(['/tela-extrato']);
  }

  pix() {
    this.router.navigate(['/tela-pix']);
  }

  sair() {
    this.router.navigate(['/tela-login']);
  }
}