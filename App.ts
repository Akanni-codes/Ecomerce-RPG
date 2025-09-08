import readlinesync = require("readline-sync");

export function main() {
  let opcao: number;

  while (true) {
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("          Bem vindo a Caverna dos Dados              ");
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
        console.log("Registrar Produto");
        break;
      case 2:
        console.log("Listar todos produtos");
        break;
      case 3:
        console.log("Buscar Produto por ID");
        break;
      case 4:
        console.log("Atualizar Dados do produto");
        break;
      case 5:
        console.log("Apagar Produto");
        break;
    }
  }
}
main();