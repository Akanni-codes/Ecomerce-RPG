import { Miniatura } from "../model/Miniatura";

export interface MiniaturaRepository {
  procurarporID(Id: number): void;
  listarTodas(): void;
  cadastrar(miniatura: Miniatura): void;
  atualizar(miniatura: Miniatura): void;
  deletar(Id: number): void;
}
