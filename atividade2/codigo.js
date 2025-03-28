const input = document.querySelector("input#input");
const button = document.querySelector("button");
const lista = document.querySelector("#lista");
button.addEventListener("click", (event) => {
    if (input.value.length <= 2) {
        window.alert("O item deve ter, pelo menos, 3 letras.");
    } else {
        const novoItem = document.createElement("li");
        const checkboxItem = document.createElement("input");
        const textItem = document.createElement("span");
        const removeButtonItem = document.createElement("button");
        textItem.textContent = input.value;
        checkboxItem.setAttribute("type", "checkbox");
        checkboxItem.addEventListener("click", (event) => {
            if (event.target.checked) {
                textItem.classList.add("checked");
                checkboxItem.classList.add("checked");
            } else {
                textItem.classList.remove("checked");
                checkboxItem.classList.remove("checked");
            }
        });
        removeButtonItem.textContent = "Remover";
        novoItem.insertAdjacentElement("beforeend", checkboxItem);
        novoItem.insertAdjacentElement("beforeend", textItem);
        novoItem.insertAdjacentElement("beforeend", removeButtonItem);
        lista.appendChild(novoItem);
        removeButtonItem.addEventListener("click", removerItem);
        input.value = "";
    }
});
function removerItem(event) {
    lista.removeChild(event.target.parentElement);
}

// Criando a tag style
const styleTag = document.createElement("style");
// Adicionando o conteúdo da tag style (aplicando estilos ao body)
styleTag.innerHTML = `
body {
background-color: #222222;
color: #e7e7e7;
margin: 2rem;
width: 50%;
}
`;
// Obtendo a tag head do HTML
const headTag = document.querySelector("head");
// Inserindo a tag style como filha da tag head (ao final)
headTag.appendChild(styleTag);

styleTag.innerHTML = `
body {
background-color: #222222;
color: #e7e7e7;
margin: 2rem;
width: 50%;
}
body > div {
display: flex;
}
input#input {
font-size: 1rem;
height: 28px;
border-radius: 5px;
border: none;
flex: 1;
}
button#add {
font-size: 1rem;
border: none;
background-color: rgb(245, 179, 36);
height: 30px;
padding: 0 15px;
border-radius: 5px;
margin-left: 10px;
cursor: pointer;
}
ul#lista {
list-style: none;
padding: 2rem 0;
}
li {
padding: 0 0 1rem;
display: flex;
gap: 5px;
align-items: center;
}
input[type="checkbox"] {
height: 1.2rem;
width: 1.2rem;
}
#lista > li > span {
font-size: 1.2rem;
font-weight: 500;
flex: 1;
}
#lista > li > .checked {
text-decoration: line-through;
opacity: 0.6;

}
#lista > li > button {
font-size: 0.85rem;
border: none;
background-color: red;
color: white;
padding: 4px 10px 5px;
border-radius: 5px;
margin-left: 10px;
cursor: pointer;
}
`;
