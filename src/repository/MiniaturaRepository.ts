import { Miniatura } from "../model/Miniatura";

export interface MiniaturaRepository {
  procurarporNumero(numero: number): void;
  listarTodas(): void;
  cadastrar(conta: Miniatura): void;
  atualizar(conta: Miniatura): void;
  deletar(numero: number): void;
}
