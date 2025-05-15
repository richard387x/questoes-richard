let preco = parseFloat(prompt("Insira o valor do produto"))

let vista = preco - (preco*10/100)
let parcela = vista/3

alert(" O valor do produto é: " + preco +"O valor á vista será: " + vista + "em 3 parcelas de R$: " + parcela)