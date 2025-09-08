import { Miniatura } from "./Miniatura";

export class MiniaturaAmbiente extends Miniatura {
  private _ambiente: number;
  constructor(
    Id: number,
    tipo: number,
    nome: string,
    stock: number,
    descricao: string,
    preco: number,
    ambiente: number
  ) {
    super(Id, tipo, nome, stock, descricao, preco);
    this._ambiente = ambiente;
  }

  public get ambiente() {
    return this._ambiente;
  }

  public set ambiente(ambiente: number) {
    this._ambiente = ambiente;
  }
  public visualizar(): void {
    let ambiente: string = "";
    switch (this._ambiente) {
      case 1:
        ambiente = "Deserto";
        break;

      case 2:
        ambiente = "Floresta";
        break;

      case 3:
        ambiente = "Urbano";
        break;

      case 4:
        ambiente = "Aquatico";
        break;

      case 5:
        ambiente = "Cyberpunk";
        break;
    }
    super.visualizar();
    console.log("Tipo de Ambiente:" + this._ambiente);
  }
}
