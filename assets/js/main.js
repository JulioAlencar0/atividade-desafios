// 01-Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
function challenge01(){
    alert("Hello World!")
    
}

// 02-Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
function challenge02(){
    let n1 = parseInt(prompt("Digite o primeiro valor a ser somado: "))

    let n2 = parseInt(prompt("Digite o segundo valor a ser somado: "))

    alert(`O resultado de ${n1} + ${n2} é ${(n1 + n2)}`)
    
}

// 03 - Crie um script que declara uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
function challenge03(){
    let num = prompt("Digite um número: ")
    if(num === null){

    }
    else if(isNaN(num)){
        alert("Não é um número!")
    }else{
        alert("É um número!")
    }
}

// 04 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
function challenge04(){
    let nome = prompt("Digite uma string")
    if(nome === null){

    }
    else if( isNaN(nome)){
        alert("É uma string!") 
    }else{
        alert("Não é uma string!")
    }
}

// 05 - Crie um script que declara uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
function challenge05(){
    let r = prompt("Digite true ou false")
    let v
    if (r === "true") {
        v = true
    } else if(r === "false"){
        v = false
    } else{
        v = r
    }
    if (typeof v === "boolean") {
        alert("É um booleano")
    }else{
        alert("Não é um booleano")
    }
}

// 06 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
function challenge06(){
    let n1 = parseInt(prompt("Digite o primeiro valor a ser subtraído: "))
    let n2 = parseInt(prompt("Digite o segundo valor a ser substraído: "))

    alert(`O resultado de ${n1} - ${n2} é: ${(n1 - n2)}`)

}

// 07 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

function challenge07(){
    let n1 = parseInt(prompt("Digite o primeiro valor a ser multiplicado: "))
    let n2 = parseInt(prompt("Digite o segundo valor a ser multiplicado: "))

    alert(`O resultado de ${n1} x ${n2} é: ${(n1 * n2)}`)

}
// 08 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
function challenge08(){
    let n1 = parseInt(prompt("Digite o primeiro valor a ser dividido: "))
    let n2 = parseInt(prompt("Digite o segundo valor a ser dividido: "))

    alert(`O resultado de ${n1} / ${n2} é: ${(n1 / n2)}`)

}

// 09 - Crie um script que declara uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
function challenge09(){
let n = parseInt(prompt("Digite um número par: "));

if(n %2 == 0){
    alert("O número é par.")
}else{
    alert("O número não é par.")
 }
}

// 10-  Crie um script que declara uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
function challenge10() {
let num = parseInt(prompt("Digite um número ímpar: "));

if(num %2 == 0){
    alert("O número não é ímpar.")
}else{
    alert("O número é ímpar.")
 }
}
