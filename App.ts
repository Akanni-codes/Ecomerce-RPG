import readlinesync = require("readline-sync");
import { MiniaturaAmbiente } from "./src/model/MiniaturaAmbiente";
import { MiniaturaPersonagem } from "./src/model/MiniaturaPersonagem";
import { MiniaturaController } from "./src/controller/MiniaturaController";
import { closeSync } from "fs";

export function main() {
  let Miniaturas: MiniaturaController = new MiniaturaController();
  let opcao, Id, tipo, stock, preco, bioma, arquetipo: number;
  let nome, descricao: string;
  const tipoMini = ["Miniatura de Ambiente", "Miniatura de Personagem"];
  const tipobioma = ["Deserto", "Floresta", "Urbano", "Aquatico", "Cyberpunk"];
  const tipoArquetipo = ["Corpo-a-Corpo", "Longa Distancia", "Conjurador"];

  Miniaturas.cadastrar(
    new MiniaturaAmbiente(Miniaturas.gerarId(), 1, "sla", 5, "mto boa", 200, 2)
  );

  Miniaturas.cadastrar(
    new MiniaturaPersonagem(
      Miniaturas.gerarId(),
      2,
      "outra ai",
      3,
      "mto forte",
      50,
      2
    )
  );
  while (true) {
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("          Bem vindo a Caverna das miniaturas         ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Registrar Produto                    ");
    console.log("            2 - Listar todos produtos                ");
    console.log("            3 - Buscar Produto por ID                ");
    console.log("            4 - Atualizar Dados do produto           ");
    console.log("            5 - Apagar Produto                       ");
    console.log("            6 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");
    if (opcao === 6) {
      console.log("\nCaverna dos Dados - Sua Aventura começa aqui!");
      process.exit(0);
    }
    switch (opcao) {
      case 1:
        console.log("\n\nRegistrar Produto\n\n");

        console.log("\nDigite o tipo da miniatura: ");
        tipo = readlinesync.keyInSelect(tipoMini, "", { cancel: false }) + 1;

        console.log("Digite o Nome da Miniatura: ");
        nome = readlinesync.question("");

        console.log("Digite o Número em stock: ");
        stock = readlinesync.questionInt("");

        console.log("Digite a Descrição da Miniatura: ");
        descricao = readlinesync.question("");

        console.log("\nDigite o valor da Miniatura: ");
        preco = readlinesync.questionFloat("");

        switch (tipo) {
          case 1:
            console.log("\nEscolha o tipo do bioma: ");
            bioma =
              readlinesync.keyInSelect(tipobioma, "", { cancel: false }) + 1;
            Miniaturas.cadastrar(
              new MiniaturaAmbiente(
                Miniaturas.gerarId(),
                tipo,
                nome,
                stock,
                descricao,
                preco,
                bioma
              )
            );
            break;
          case 2:
            console.log("\nEscolha o Arquetipo da personagem: ");
            arquetipo =
              readlinesync.keyInSelect(tipoArquetipo, "", { cancel: false }) +
              1;
            Miniaturas.cadastrar(
              new MiniaturaPersonagem(
                Miniaturas.gerarId(),
                tipo,
                nome,
                stock,
                descricao,
                preco,
                arquetipo
              )
            );
            break;
        }

        break;
      case 2:
        console.log("Listar todas Miniaturas");
        Miniaturas.listarTodas();
        continuar();
        break;
      case 3:
        console.log("Digite o Id da Miniatura:");
        Id = readlinesync.questionInt("");
        Miniaturas.procurarporID(Id);
        continuar();
        break;
      case 4:
        console.log("Atualizar Dados do produto");

        console.log("Digite o Id da Miniatura: ");
        Id = readlinesync.questionInt("");

        let minitura = Miniaturas.buscarNoArray(Id);

        if (minitura != null) {
          tipo = minitura.tipo;
          console.log("Digite o Nome da Miniatura: ");
          nome = readlinesync.question("");

          console.log("Digite a quantidade em Stock: ");
          stock = readlinesync.questionInt("");

          console.log("Digite a Descrição: ");
          descricao = readlinesync.question("");

          console.log("Digite o Valor da Miniatura: ");
          preco = readlinesync.questionInt("");
          switch (tipo) {
            case 1:
              console.log("\nEscolha o tipo do bioma: ");
              bioma =
                readlinesync.keyInSelect(tipobioma, "", { cancel: false }) + 1;
              Miniaturas.atualizar(
                new MiniaturaAmbiente(
                  Id,
                  tipo,
                  nome,
                  stock,
                  descricao,
                  preco,
                  bioma
                )
              );
              break;

            case 2:
              console.log("\nEscolha o Arquetipo da personagem: ");
              arquetipo =
                readlinesync.keyInSelect(tipoArquetipo, "", { cancel: false }) +
                1;
              Miniaturas.atualizar(
                new MiniaturaAmbiente(
                  Id,
                  tipo,
                  nome,
                  stock,
                  descricao,
                  preco,
                  arquetipo
                )
              );
              break;
          }
        } else {
          console.log(`A Miniatura de Id ${Id} não foi encontrada`);
        }
        continuar();
        break;
      case 5:
        console.log("Apagar Produto");
        console.log("Digite o Id da Miniatura:");
        Id = readlinesync.questionInt("");
        Miniaturas.deletar(Id);
        continuar();
        break;
    }
  }
}
function continuar(): void {
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}
main();
