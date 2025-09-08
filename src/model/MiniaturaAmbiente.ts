import { Miniatura } from "./Miniatura";

export class MiniaturaAmbiente extends Miniatura {
  private _bioma: number;
  constructor(
    Id: number,
    tipo: number,
    nome: string,
    stock: number,
    descricao: string,
    preco: number,
    bioma: number
  ) {
    super(Id, tipo, nome, stock, descricao, preco);
    this._bioma = bioma;
  }

  public get bioma() {
    return this._bioma;
  }

  public set bioma(bioma: number) {
    this._bioma = bioma;
  }
  public visualizar(): void {
    let bioma: string = "";
    switch (this._bioma) {
      case 1:
        bioma = "Deserto";
        break;

      case 2:
        bioma = "Floresta";
        break;

      case 3:
        bioma = "Urbano";
        break;

      case 4:
        bioma = "Aquatico";
        break;

      case 5:
        bioma = "Cyberpunk";
        break;
    }
    super.visualizar();
    console.log("Tipo de bioma:" + bioma);
  }
}
