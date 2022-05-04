/**
 * escreva uma função (arrow function) que irá receber os parâmetros cpf, data de nascimento e cep (todos em string)
 * e sem formatação, formate-os com regex e exiba no console
 */

 /**
  * const person = {
  *  firstName: "John",
  *  lastName: "Doe"
  * };
  * 
  * Dado o objeto acima, extraia cada propriedade com destructuring
  */

 /**
  * const person = {
  *  firstName: "John",
  *  lastName: "Doe",
  *  age: 30,
  *  country: "Brazil",
  *  city: "São Paulo"
  *  state: "SP",
  *  postalCode: "01001001",
  *  neighbohur: "Centro"
  * }
  * 
  * Dado o objeto acima, extraia os dados pessoais de John e todo restante (endereço) em uma variável
  * chamada endereco, ao final desse exercício, você deve ter apenas 4 variáveis
  */

// exercício 1

//  Objeto pessoa com todos os dados
const person = {
    firstName: "Graziella",
    lastName: "Guedes",
    cpf: "00011122233",
    dateOfBirth: "17/12/1994", 
    postalCode: "20561142",
    
 };

//  Extraí as propriedade com destructuring
 const { firstName, lastName, cpf, dateOfBirth, postalCode } = person;
 
// fiz uma função de substituição somente com os atributos a serem padronizados usando regex e retornando um tamplate string com todos os dados da pessoa, inclusive os extraídos com destructuring.
const replacer = (cpf, dateOfBirth, postalCode) => {
    let newCpf = cpf.replace(/^([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})$/, "$1.$2.$3-$4")
    let newDateOfBirth = dateOfBirth.replace(/^([0-9]{2})([1-9]{2})([1-9]{4})$/, "$1/$2/$3")
    let newPostalCode = postalCode.replace(/^([0-9]{2})([0-9]{3})([0-9]{3})$/, "$1.$2-$3")
    return `Name: ${firstName} ${lastName}; 
CPF: ${newCpf};
Date of Birth: ${newDateOfBirth};
PostalCode: ${newPostalCode}.`
};

// chamei a função de substituição, OBS: coloquei um alert também porque estava testando alguns comandos da aula do william 
console.log(replacer(cpf, dateOfBirth, postalCode));
alert(replacer(cpf, dateOfBirth, postalCode));


/* obs:
referencias extras para desvendar o regex: 
https://pt.stackoverflow.com/questions/133691/formatar-campo-cpf-ou-cnpj-usando-regex?noredirect=1&lq=1
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
https://stackoverflow.com/questions/1162529/javascript-replace-regex
https://www.javascripttutorial.net/javascript-regex/replace/
*/

// exercício 2
const personB = {
    firstName2: "John",
    lastName2: "Doe",
};

const { firstName2, lastName2 } = personB;
console.log(firstName2, lastName2);


// exercício 3 - 
const personC = {
    firstName3: "Graziella",
    lastName3: "Guedes",
    age: '27',
    address: {
        country: "Brazil", 
        city: "São Paulo", 
        state: "SP", 
        postalCode3: "20561145",
    }
};

const { firstName3, lastName3, age, ...address } = personC;
console.log(firstName3, lastName3, age, address);





