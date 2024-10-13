export class Correntista {
  nome: string = '';
  cpf_cnpj: string = '';
  senha: string = '';
  chave_pix: string = '';
  data_pix: Date | null = null; // Agora permite que seja null
}