
// var = string
var nome = prompt("Insira seu nome: ")

        // var = string transformada em array, invertida, e transformada em string.
        // ou seja: if string = gabriel, reverse = leirbag.
        var reverse = nome.split ('').reverse(). join('');

        // se nome = gabriel for igual a reverse == leirbag
        if (nome == reverse)
        {   
            // é um palindromo.
            alert ("Palindromo");
        }
        else
        {   
            // não é uma palindromo.
            alert("Não é um palindromo");
        }

        // easy peasy lemon squeezy!