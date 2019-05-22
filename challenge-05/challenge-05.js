/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?

var x = ['a', 1, 56, true, 'b']
//console.log(x)

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
//function myfunc(arr){
//	return arr;
//}
//console.log(myfunc(x))
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
//console.log(myfunc(x)[2])
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function myfunc(arr, indx){
return arr[indx]}

console.log(myfunc(x,0));


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(name){
	var livro = {
		livro1: {quantidadePaginas: 10, autor: 'Bianca', editora: 'Atikas'},
		livro2: {quantidadePaginas: 15, autor: 'Marilde', editora: 'Globo'},
		livro3: {quantidadePaginas: 20, autor: 'Henrique', editora: 'SBT'},	
	}
	
	return name ? livro[name] : livro;
}

console.log(book('livro2'));
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

//console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log('O livro2 tem ' + book('livro2').quantidadePaginas + ' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro2 é ' + book('livro2').autor)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro2 foi publicado pela editora ' + book('livro2').editora)

