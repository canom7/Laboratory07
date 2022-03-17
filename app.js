//CASO 1 - IBAN
console.log("------------CASO 1 - IBAN----------");
const patternIBANC1 = /^ES\d{22}$/;

const valuesIBANC1 = ['ES6600190020961234567890'];

valuesIBANC1.forEach(value => {
  console.log(`Regexp matchs with "${value}"? -> `, patternIBANC1.test(value));  
});

//CASO 2 - IBAN
console.log("------------CASO 2 - IBAN----------");
const patternIBANC2 = /^ES\d{2}\s?(\d{4}\s?){4}\d{4}$/;

const valuesIBANC2 = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

valuesIBANC2.forEach(value => {
  console.log(`Regexp matchs with "${value}"? -> `, patternIBANC2.test(value));  
});

//CASO 3 - IBAN
console.log("------------CASO 3 - IBAN----------");
const patternIBANC3 = /^(ES)\d{2}\s?(\d{4}\s?){2}(\d{2})\d{2}\s?\d{4}\s?\d{4}$/;

const valuesIBANC3 = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

valuesIBANC3.forEach(value => {
  console.log(`Codigo de pais y el digito de control for "${value}"are -> `, 
  'Codigo pais: ' + patternIBANC3.exec(value)[1],
  'Digito control: ' + patternIBANC3.exec(value)[3]);  
});


//CASO 1 - MATRICULA
console.log("------------CASO 1 - MATRICULA----------");
const patternMatrC1 = /^\d{4}(\s|-)?[A-Z]{3}$/;

const valuesMatrC1 = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

valuesMatrC1.forEach(value => {
  console.log(`Regexp matchs with "${value}"? -> `, patternMatrC1.test(value));  
});

//CASO 2 - MATRICULA
console.log("------------CASO 2 - MATRICULA----------");
const patternMatrC2 = /^(\d{4})(\s|-)?([A-Z]{3})$/;

const valuesMatrC2 = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

valuesMatrC2.forEach(value => {
  console.log(`numbers and letters for "${value}" are -> `, 
  'Numbers: ' + patternMatrC2.exec(value)[1],
  'Letters: ' + patternMatrC2.exec(value)[3]); 
});


//CASO 1 - OPCIONAL 1
console.log("------------CASO 1 - OPCIONAL 1----------");
const patternOpt1C1 = /^<img src=".{1,}\.(jpg|png|gif)"\/>$/i;

const valuesOpt1C1 = ['<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>'];

valuesOpt1C1.forEach(value => {
  console.log(`Regexp matchs with "${value}"? -> `, patternOpt1C1.test(value));  
});

//CASO 2 - OPCIONAL 1
console.log("------------CASO 2 - OPCIONAL 1----------");
const patternOpt1C2 = /^<img\s?src=".{1,}\.(jpg|png|gif)"(\s)?\/>$/igm;

const valuesOpt1C2 = `<html>
<body>
<img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
/>
<h1>ejemplo</h1>
<img src="https://github.githubassets.com/images/modules/logos_page/GitHubMark.png"
/>
</body>
</html>
`

console.log(`Does Regexp get the images? -> `, patternOpt1C2.test(valuesOpt1C2));  


//CASO 1 - OPCIONAL 2 - mastercard
console.log("------------CASO 1 - OPCIONAL 2----------");
const patternOpt2C1 = /^5[0-5]\d{2}(\s|-)?(\d{4}(\s|-)?){2}\d{4}$/;


const valuesOpt2C1 = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];

valuesOpt2C1.forEach(value => {
  console.log(`Regexp matchs with "${value}"? -> `, patternOpt2C1.test(value));  
});

//CASO 2 - OPCIONAL 2 - mastercard
console.log("------------CASO 2 - OPCIONAL 2----------");
const patternOpt2C2 = /^(5[0-5]\d{2})(\s|-)?(\d{4})(\s|-)?(\d{4})(\s|-)?(\d{4})$/;


const valuesOpt2C2 = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];

valuesOpt2C2.forEach(value => {
  console.log(`Groups for:  "${value}"? -> `, 
    'G1: ' + patternOpt2C2.exec(value)[1],  
    'G2: ' + patternOpt2C2.exec(value)[3],
    'G3: ' + patternOpt2C2.exec(value)[5],
    'G4: ' + patternOpt2C2.exec(value)[7])
   
});


//CASO 2 - OPCIONAL 3 - URL
console.log("------------CASO 2 - OPCIONAL 3----------");
//https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
const regexURL = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

const valuesURL = ['https://www.lemoncode.net', 'www.lemoncode.net', 'lemoncode.net'];

valuesURL.forEach(value => {
  console.log(`Regexp matchs with "${value}"? -> `, regexURL.test(value));  
});


//CASO 3 - OPCIONAL 3 - Color Hexadecimal
console.log("------------CASO 3 - OPCIONAL 3----------");
//https://es.acervolima.com/como-validar-el-codigo-de-color-hexadecimal-usando-expresion-regular/
const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

const valuesHex = ['#ABC', '#000', '#FFF', '#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFFFF'];

valuesHex.forEach(value => {
  console.log(`Regexp matchs with "${value}"? -> `, regex.test(value));  
});