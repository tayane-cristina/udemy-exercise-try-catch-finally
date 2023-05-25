//Capturando erros com try, catch e trow

const soma = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new error("x e y precisam ser números")
    }
    return x + y
}
 
try {
    //console.log(soma(1, 2))
    //console.log(soma('1', 3))
} catch(erro){
    //console.log("Os dados informados são inválidos")
}

//Crie uma função que retorna a hora, e receba um new Date como parametro:

const hora = (data) => {
    if (!(data instanceof Date)) {
        console.log('Esperando instância de Date')
    } 

    if (!data){
        data = new Date()
        }
    
        return data.toLocaleTimeString('pt-BR',{
            hour12: false
        })
    }

    try {
        let retornaHora = hora(11)
        console.log(retornaHora)
    } catch(erro) {
        console.log('dados inválidos, insira uma valor que seja uma instância de Date')
    } finally {
        console.log('tenha um bom dia')
    }
 


