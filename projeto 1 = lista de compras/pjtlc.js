function adicionarItem(lista) {
    const item = prompt("Digite o nome do item para adicionar:");
    if (item) {
        lista.push(item);
        console.log(`${item} foi adicionado à lista de compras.`);
    } else {
        console.log("Item inválido.");
    }
}

function removerItem(lista) {
    const item = prompt("Digite o nome do item para remover:");
    const index = lista.indexOf(item);
    if (index !== -1) {
        lista.splice(index, 1);
        console.log(`${item} foi removido da lista.`);
    } else {
        console.log(`${item} não está na lista de compras.`);
    }
}

function pesquisarItem(lista) {
    const item = prompt("Digite o nome do item para pesquisar:");
    if (lista.includes(item)) {
        console.log(`${item} está na lista de compras.`);
    } else {
        console.log(`${item} não está na lista de compras.`);
    }
}

function ordenarLista(lista) {
    lista.sort();
    console.log("A lista foi ordenada.");
}

function exibirLista(lista) {
    if (lista.length === 0) {
        console.log("A lista de compras está vazia.");
    } else {
        console.log("Itens na lista de compras:");
        lista.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}

function limparLista(lista) {
    lista.length = 0;
    console.log("A lista de compras foi limpa.");
}

function mostrarMenu() {
    return prompt(
        "Escolha uma opção:\n" +
        "1. Adicionar item\n" +
        "2. Remover item\n" +
        "3. Pesquisar item\n" +
        "4. Ordenar lista\n" +
        "5. Exibir lista\n" +
        "6. Limpar lista\n" +
        "7. Encerrar programa"
    );
}

function main() {
    const listaCompras = [];
    let opcao;

    do {
        opcao = mostrarMenu();

        switch (opcao) {
            case '1':
                adicionarItem(listaCompras);
                break;
            case '2':
                removerItem(listaCompras);
                break;
            case '3':
                pesquisarItem(listaCompras);
                break;
            case '4':
                ordenarLista(listaCompras);
                break;
            case '5':
                exibirLista(listaCompras);
                break;
            case '6':
                limparLista(listaCompras);
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
