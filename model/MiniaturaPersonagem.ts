import { Miniatura } from "./Miniatura";

export class MiniaturaPersonagem extends Miniatura {
  private _arquertipo: number;
  constructor(
    Id: number,
    tipo: number,
    nome: string,
    stock: number,
    descricao: string,
    preco: number,
    arquertipo: number
  ) {
    super(Id, tipo, nome, stock, descricao, preco);
    this._arquertipo = arquertipo;
  }

  public get arquetipo() {
    return this._arquertipo;
  }

  public set arquetipo(arquertipo: number) {
    this._arquertipo = arquertipo;
  }
  public visualizar(): void {
    let arquetipo: string = "";
    switch (this._arquertipo) {
      case 1:
        arquetipo = "Corpo-a-Corpo";
        break;

      case 2:
        arquetipo = "Longa Distancia";
        break;

      case 3:
        arquetipo = "Conjurador";
        break;
    }
    super.visualizar();
    console.log("Tipo de Combatente:" + this._arquertipo);
  }
}
