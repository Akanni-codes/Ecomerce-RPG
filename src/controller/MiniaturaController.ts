import { Miniatura } from "../model/Miniatura";
import { MiniaturaRepository } from "../repository/MiniaturaRepository";

export class MiniaturaController implements MiniaturaRepository {
  private listaMini: Array<Miniatura> = new Array<Miniatura>();
  Id: number = 0;

  procurarporID(Id: number): void {
    let buscaMini = this.buscarNoArray(Id);

    if (buscaMini != null) {
      buscaMini.visualizar();
    } else {
      console.log("\nA Conta Id: " + Id + " não foi encontrada");
    }
  }
  listarTodas(): void {
    for (let miniatura of this.listaMini) {
      miniatura.visualizar();
    }
  }
  cadastrar(miniatura: Miniatura): void {
    this.listaMini.push(miniatura);
    console.log(`\nA Miniatura de Id: ${miniatura.Id} foi criada com sucesso!`);
  }
  atualizar(miniatura: Miniatura): void {
    let buscaMini = this.buscarNoArray(miniatura.Id);

    if (buscaMini != null) {
      this.listaMini[this.listaMini.indexOf(buscaMini)] = miniatura;
      console.log(
        "\nA Miniatura de Id: " + miniatura.Id + " foi atualizada com sucesso!",
      );
    } else {
      console.log(
        "\nA Miniatura de Id: " + miniatura.Id + " não foi encontrada",
      );
    }
  }
  deletar(Id: number): void {
    let buscaMini = this.buscarNoArray(Id);
    if (buscaMini != null){
        this.listaMini.splice(this.listaMini.indexOf(buscaMini),1);
        console.log(`\nA Miniatura de Id ${Id} foi apagado com sucesso!`)
    }else{
        console.log(`\nA Miniatura de Id ${Id} não foi encontrada!`)
    }
  }
  public gerarId(): number {
    return ++this.Id;
  }

  public buscarNoArray(Id: number): Miniatura | null {
    for (let miniatura of this.listaMini) {
      if (miniatura.Id === Id) {
        return miniatura;
      }
    }
    return null;
  }
}
