// 1 - acessando um elemento
// document - representa toda a página/arquivo
// getElementById  é um metodo (função, ação) que procura um elemento pelo atributo ID
c
console.log(paragrafo)

// 2 - alterando o conteúdo de um elemento
paragrafo.textContent = "Alterando o texto do parágrafo com JS"

// 3 - alterando o estilo
paragrafo.style.color = "blue"
paragrafo.style.fontSize = "2rem"

// 4 - criando elementos
// creatElement
const paragrafoJavaScript = document.createElement("p")

// 4.1 - atualizando o conteudo do paragrafo
paragrafoJavaScript.textContent = "Este paragrao foi criado com JS"
paragrafoJavaScript.style.fontFamily = "sans-serif"
paragrafoJavaScript.style.fontSize = "1.5rem"
paragrafoJavaScript.style.backgroundColor= "deeppink"
paragrafoJavaScript.style.color= "#111"
paragrafoJavaScript.style.padding= "5rem"
paragrafoJavaScript.style.borderRadius= "1rem"
paragrafoJavaScript.style.textAlign= "center"


// 4.2 - inserindo o paragrafo na pagina
// appendchild - serve para adcionar um item ao final da pagina
document.body.appendChild(paragrafoJavaScript)

// 5 - removendo um elemento do HTML 
const titulo = document.getElementById("titulo")

// 5.1 - removendo
titulo.remove()