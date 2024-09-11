/*
ATIVIDADE AVALIATIVA 
ALBERT FRANÇA
TURMA 109

/* 1º
function gerarArrayAleatorio(tamanho, min, max) {
    if (tamanho <= 0 || min > max) {
        throw new Error("Argumentos inválidos");
    }
    const arrayAleatorio = [];
    for (let i = 0; i < tamanho; i++) {
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        arrayAleatorio.push(numeroAleatorio);
    }
    console.log(arrayAleatorio);
    return arrayAleatorio;
}
try 
{
    const resultado = gerarArrayAleatorio(5, 1, 10);
    console.log(resultado);
} 
catch (e) 
{
    console.error(e.message);
}
*/
/* 2º
function elementosMaisFrequentes(array){
    let maior= null;
    let ocorrenciasMaior = -1;

    for (let i =0; i < array.length; i++){
        let ocorrencias = 1;
        for (let t = i + 1; t < array.length; t++){
            if (array[i]=== array[t]){
                ocorrencias++;
            }
        }

        if (ocorrencias > ocorrenciasMaior)
{
            maior = array[i];
            ocorrenciasMaior = ocorrencias;
     }
  }

  if(ocorrenciasMaior === -1){
    console.log("Não há elemento mais frequente");
  } else {
      return console.log("Maior");
  }
}
*/
/*3º
function removerElementosRepetidos(array) {

    let arraySemRepetidos = [...new Set(array)];
    
    if (array.length === arraySemRepetidos.length) {
      return "Não há elementos repetidos";
    }
    
    return arraySemRepetidos;
  }
  
console.log(removerElementosRepetidos([1, 2, 2, 3, 4, 4, 5]));
*/
/*
function concatenarArrays(array1, array2) {
    return array1.concat(array2);
  }
  
console.log(concatenarArrays([1, 2, 3], [4, 5, 6]));
*/
/*5º
function main() {
    function exercicio1(arr) {
        return arr.map(x => x + 1);
    }

    function exercicio2(arr) {
        return arr.map(x => x * 2);
    }

    function exercicio3(arr) {
        return arr.map(x => x - 3);
    }

    function processarEImprimir(funcao, nomeExercicio, entrada) {
        console.log("-----------------------------------");
        console.log(`Passando pela função do ${nomeExercicio}`);
        console.log(`Entrada: array [${entrada.join(', ')}]`);
        const saida = funcao(entrada);
        console.log(`Saída: array [${saida.join(', ')}]`);
        console.log("-----------------------------------");
    }

    const arrayExemplo = [1, 2, 3];

    processarEImprimir(exercicio1, "Exercício 1", arrayExemplo);
    processarEImprimir(exercicio2, "Exercício 2", arrayExemplo);
    processarEImprimir(exercicio3, "Exercício 3", arrayExemplo);
}

main();
*/
