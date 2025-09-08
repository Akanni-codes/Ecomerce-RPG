export abstract class Miniatura {
  private _Id: number;
  private _tipo: number;
  private _nome: string;
  private _stock: number;
  private _descricao: string;
  private _preco: number;

  constructor(
    Id: number,
    tipo: number,
    nome: string,
    stock: number,
    descricao: string,
    preco: number
  ) {
    this._Id = Id;
    this._tipo = tipo;
    this._nome = nome;
    this._stock = stock;
    this._descricao = descricao;
    this._preco = preco;
  }

  public get Id() {
    return this._Id;
  }
  public set Id(Id: number) {
    this._Id = Id;
  }
  public get tipo() {
    return this._tipo;
  }
  public set tipo(tipo: number) {
    this._tipo = tipo;
  }
  public get nome() {
    return this._nome;
  }
  public set nome(nome: string) {
    this._nome = nome;
  }
  public get stock() {
    return this._stock;
  }
  public set stock(stock: number) {
    this._stock = stock;
  }
  public get descricao() {
    return this._descricao;
  }
  public set descricao(descricao: string) {
    this._descricao = descricao;
  }
  public get preco() {
    return this.preco;
  }
  public set preco(preco: number) {
    this.preco = preco;
  }

  public visualizar(): void {
    let tipo: string = "";
    switch (this._tipo) {
      case 1:
        tipo = "Miniatura Personagem";
        break;

      case 2:
        tipo = "Miniatura Ambientação";
        break;
    }
    console.log("\n\n*****************************************************");
    console.log("Dados do livro:");
    console.log("*****************************************************");
    console.log("ID do Livro: " + this._Id);
    console.log("Nome: " + this._nome);
    console.log("Tipo da Miniatura: " + tipo);
    console.log("Qnt em Stock: " + this._stock);
    console.log("Descrição: " + this._descricao);
    console.log("Valor: " + this._preco.toFixed(2));
  }
}
