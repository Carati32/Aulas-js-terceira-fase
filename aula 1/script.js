// Atividade 3. Solicite ao usuário que digite um CPF e verifique se ele tem exatamente 11 dígitos. Caso contrário, exiba uma mensagem personalizada explicando o erro.
function CPF(){
   //Entrada - input de dados
   let CPF = prompt("Digite seu CPF: ")
   
   //Convertendo para string
   let strcCpf = String(CPF)
   
   //Verifica se a variável cpf tem o tamanho 11
   if(strcCpf.length === 11){
      alert('Perfeito!')
   }
   //Contrario do IF - senão (senão fizer o bloco do IF, ele vem pro else)
   else{
      alert("Opa, parceiro! Seu cpf está faltando digito")
   }
}

// Atividade 4. Converta os dados abaixo:

function converter(){
   //Conversor para inteiro
   let n1 = '150'; //para int
   let nr1 = parseInt(n1)

   //Conversor para string
   let n2 = 18; //para string
   let nr2 = String(n2)

   //Conversor para float
   let n3 = "20.99"; //float
   let nr3 = parseFloat(n3)

   //Conversor para int
   let n4 = "010"; //para int
   let nr4 = parseInt(n4)

   alert(nr1 +"\n" + nr2 + "\n"  + nr3 + "\n" + nr4)
}

//OU

//Conversor para inteiro
let n1 = '150'; //para int
console.log(parseInt(n1))

//Conversor para string
let n2 = 18; //para string
console.log(String(n2))

//Conversor para float
let n3 = "20.99"; //float
console.log(parseFloat(n3))

//Conversor para int
let n4 = "010"; //para int
console.log(parseInt(n4))

// Atividade 5. Qual valor de cada variável abaixo
function mostraValor(){
   let soraia = 0;
   soraia++
   
   let bichinho = 5;
   bichinho++;
   
   let mateus = 40;
   mateus --;
   
   let numero = 10;
   numero += 5;
   
   let saldo = 500;
   saldo -= 200;
   
   let b1 = 9;
   b1 *= 2;
   
   let aux = 1;
   aux = aux + 9;
   
   let auxx = 5;
   auxx = auxx - 5;

   alert(soraia +"\n"+ bichinho + "\n" + mateus + "\n" + numero + "\n" + saldo + "\n" +  b1 + "\n" + aux + "\n" + auxx)
}


// Atividade 6. Crie um objeto aluno com as propriedades nome, idade, notaFinal e aproovado(boolean).
let nome = "Alino";
let idade = 30;
let notaFinal = 6;
let aprovado = true;


//numero 6
let objeto = {
   nome: nome,
   idade: idade,
   notaFinal:notaFinal,
   aprovado:true
}

// Atividade 7. Com a atividade acima, crie uma string informando o nome, idade, nota e se foi aprovado.
let str = ""
str = `O nome do aluno aprovado é ${objeto.nome}`;
str = `A idade do aluno é ${objeto.idade}`;
str = `A nota final do aluno é ${objeto.notaFinal}`;
str = `O aluno foi ${objeto.aprovado ? "Aprovado" : "Reprovado"}`;
console.log(str)

// Atividade 8. Faça uma calculadora da sua idade

const anoAtual = 2025;
const anoNascimento =2008;

let calc = anoAtual - anoNascimento;
console.log(calc)

// Atividade 9.Converta graus Celsius para Fahrenheit com a fórmula F =(C * 9/5) + 32.

//Forma 1

//Função de conversor de graus
function conversaoGraus(c){
   //retorna a formula do conversor
   return (c*9/5) + 32
}

//Chama a função com cada número para converter
console.log("Conversão número 18" + conversaoGraus(18))
console.log("Conversão número 5" + conversaoGraus(5))
console.log("Conversão número 27" + conversaoGraus(27))
console.log("Conversão número 0" + conversaoGraus(0))
console.log("Conversão número 100" + conversaoGraus(100))
console.log("Conversão número -4" + conversaoGraus(-4))
console.log("Conversão número 33" + conversaoGraus(33))

//Forma 2

//função com os números da array
function converte(){

//Arry com os números da array
//Laço de repetição passando por cada index do array
   let arr = [18,5,27,0,200,-4,33]
   for(let i =0;i <arr.length;i++){
      //Chamando o console.log para mostrar o cálculo
      console.log((arr[i]*9/5)+32)
      
   }
}

console.log('##########')
converte(); //Chamada da função
console.log('##########')

//b)5°C

//C)27°C

//d)0

//e)100°C

//f)44°C

//g)-44°C

//h)33°C