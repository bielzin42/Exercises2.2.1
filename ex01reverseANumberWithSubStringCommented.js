// variável que recebe uma string de "numeros".
var n = "35432";

// uma variável que recebe o output da variável que recebe a string modificando por substring:
// tipo:     3 5 4 3 2
// index:  0 1 2 3 4 5
// forma de uso: variável.substring(4,5) retorna o núemero 2. já que ela pega a string a partir da index 4 até a index 5 ou seja, nesse caso, 2.
// então: ...(4,5) = 2 ...(3,4) = 3 ...(2,3) = 4 ...(1,2) = 5 ...(0,1) = 1;
//  retornando 2+3+4+5+1 o contrário de 35432.
// se eu fizesse ...(0,5) = 35432.
var reverse = n.substring(4,5) + n.substring (3,4) + n.substring (2,3) + n.substring (1,2) + n.substring (0,1);
alert("Numero originais: " + n + "\nNúmeros reversos: " + reverse);
// forma mais hardcore e com falhas. usar vetor é a melhor opção.