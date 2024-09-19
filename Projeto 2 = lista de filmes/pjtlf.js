function adicionarFilme(lista) {
  const titulo = prompt("Digite o título do filme:");
  const ano = prompt("Digite o ano de lançamento do filme:");
  
  if (titulo && ano) {
      lista.push({ titulo, ano });
      console.log(`O filme "${titulo}" (Ano: ${ano}) foi adicionado à lista de filmes para assistir.`);
  } else {
      console.log("Título ou ano inválidos.");
  }
}

function ordenarLista(lista) {
  const criterio = prompt("Deseja ordenar por 'titulo' ou 'ano'?");
  
  if (criterio === 'titulo') {
      lista.sort((a, b) => a.titulo.localeCompare(b.titulo));
      console.log("A lista foi ordenada por título.");
  } else if (criterio === 'ano') {
      lista.sort((a, b) => a.ano - b.ano);
      console.log("A lista foi ordenada por ano.");
  } else {
      console.log("Critério inválido.");
  }
}

function pesquisarFilme(lista) {
  const titulo = prompt("Digite o título do filme que deseja pesquisar:");
  const filme = lista.find(filme => filme.titulo.toLowerCase() === titulo.toLowerCase());
  
  if (filme) {
      console.log(`O filme "${filme.titulo}" (Ano: ${filme.ano}) está na lista de filmes para assistir.`);
  } else {
      console.log(`O filme "${titulo}" não está na lista de filmes para assistir.`);
  }
}

function exibirListas(paraAssistir, assistidos) {
  console.log("Lista de filmes para assistir:");
  if (paraAssistir.length === 0) {
      console.log("Nenhum filme na lista.");
  } else {
      paraAssistir.forEach((filme, index) => {
          console.log(`${index + 1}. ${filme.titulo} (Ano: ${filme.ano})`);
      });
  }

  console.log("\nLista de filmes já assistidos:");
  if (assistidos.length === 0) {
      console.log("Nenhum filme assistido.");
  } else {
      assistidos.forEach((filme, index) => {
          console.log(`${index + 1}. ${filme.titulo} (Ano: ${filme.ano})`);
      });
  }
}

function marcarComoAssistido(paraAssistir, assistidos) {
  if (paraAssistir.length === 0) {
      console.log("Nenhum filme para marcar como assistido.");
      return;
  }
  const filme = paraAssistir.shift();
  assistidos.push(filme);
  console.log(`O filme "${filme.titulo}" foi marcado como assistido.`);
}

function removerFilme(lista) {
  const titulo = prompt("Digite o título do filme que deseja remover:");
  const index = lista.findIndex(filme => filme.titulo.toLowerCase() === titulo.toLowerCase());
  
  if (index !== -1) {
      const filme = lista.splice(index, 1)[0];
      console.log(`O filme "${filme.titulo}" foi removido da lista de filmes para assistir.`);
  } else {
      console.log(`O filme "${titulo}" não está na lista de filmes para assistir.`);
  }
}

function mostrarMenu() {
  return prompt(
      "Escolha uma opção:\n" +
      "1. Adicionar filme\n" +
      "2. Ordenar lista\n" +
      "3. Pesquisar filme\n" +
      "4. Exibir listas\n" +
      "5. Marcar filme como assistido\n" +
      "6. Remover filme\n" +
      "7. Encerrar programa"
  );
}

function main() {
  const filmesParaAssistir = [];
  const filmesAssistidos = [];
  let opcao;

  do {
      opcao = mostrarMenu();

      switch (opcao) {
          case '1':
              adicionarFilme(filmesParaAssistir);
              break;
          case '2':
              ordenarLista(filmesParaAssistir);
              break;
          case '3':
              pesquisarFilme(filmesParaAssistir);
              break;
          case '4':
              exibirListas(filmesParaAssistir, filmesAssistidos);
              break;
          case '5':
              marcarComoAssistido(filmesParaAssistir, filmesAssistidos);
              break;
          case '6':
              removerFilme(filmesParaAssistir);
              break;
          case '7':
              console.log("Encerrando o programa.");
              break;
          default:
              console.log("Opção inválida. Tente novamente.");
      }
  } while (opcao !== '7');
}

main();
