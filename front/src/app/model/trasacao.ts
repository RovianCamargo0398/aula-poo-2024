export interface Transacao {
    numero: number;
    descricao: string;
    valor: number;
    data_pix: Date;
    operacao: string;
}