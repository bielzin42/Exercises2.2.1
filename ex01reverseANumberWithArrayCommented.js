function inverteString (string)
// função que recebe uma string
        {
            var divideStr = string.split("");
            // uma variável que recebe a string digitada e a transforma em um array dividinda por caracteres.
            var arrayRev = divideStr.reverse();
            // uma variável que receve o array dividido da função .reverse()
            var juntaArr = arrayRev.join("");
            // e uma variável que junta todos o caracteres divididos (e alterados) de volta para uma string.
            return juntaArr;
            // retorno.
        }

        
        alert (inverteString("ANURB"))
        // devolução ao usuário.