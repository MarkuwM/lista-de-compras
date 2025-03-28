const input = document.querySelector("input#input");
const button = document.querySelector("button");
const lista = document.querySelector("#lista");
button.addEventListener("click", (event) => {
    if (input.value.length <= 2) {
        // Lançar um alerta, caso o item tenha menos que 3 letras
        window.alert("O item deve ter, pelo menos, 3 letras.");
    } else {
        // Criando uma nova li para incluir o novo produto
        const novoItem = document.createElement("li");
        // Criando um input (que será do tipo checkbox) para marcar o produto se o produto já foi comprado ou não
        const checkboxItem = document.createElement("input");
        // Criando uma span para inserir o texto do produto da lista
        const textItem = document.createElement("span");
        // Criando um botão para remover o produto da lista
        const removeButtonItem = document.createElement("button");
        // Adicionando o texto que o usuário digitou no texto do item (produto)
        textItem.textContent = input.value;
        // Adicionando um novo atributo ao checkbox
        checkboxItem.setAttribute("type", "checkbox");
        // Adicionando texto "Remover" no botão
        removeButtonItem.textContent = "Remover";
        // Inserindo o checkbox, o texto e o botão de remover na li (novoItem)
        novoItem.insertAdjacentElement("beforeend", checkboxItem);
        novoItem.insertAdjacentElement("beforeend", textItem);
        novoItem.insertAdjacentElement("beforeend", removeButtonItem);
        // Adicionando a li (novoItem) na ul (lista)
        lista.appendChild(novoItem);
        // Adicionando o event listener para remover o novo
        // item, caso haja um clique sobre ele
        // (veja a função removerItem abaixo)
        removeButtonItem.addEventListener("click", removerItem);
        // Limpando o conteúdo do input quando o item é adicionado
        input.value = "";
    }
});
// Função chamada quando o ocorre o evento de clique
// sobre um item
function removerItem(event) {
    lista.removeChild(event.target.parentElement);
}