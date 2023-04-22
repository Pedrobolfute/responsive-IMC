let botaoCalcular = document.getElementById('btn_calcular')
botaoCalcular.addEventListener('click', calcularIMC)

let botaoCimaPeso = document.getElementsByClassName('cima1')[0]
botaoCimaPeso.addEventListener('click', maisPeso)

let botaoBaixoPeso = document.getElementsByClassName('baixo1')[0]
botaoBaixoPeso.addEventListener('click', menosPeso)

let botaoCimaAltura = document.getElementsByClassName('cima2')[0]
botaoCimaAltura.addEventListener('click', maisAltura)

let botaoBaixoAltura = document.getElementsByClassName('baixo2')[0]
botaoBaixoAltura.addEventListener('click', menosAltura)

peso.value = 0;
altura.value = 0;

function maisPeso(){
  let peso = document.getElementById('peso')
  let atualPeso = parseInt(peso.value)
  let novoPeso = atualPeso + 1;
  peso.value = novoPeso;
}

function menosPeso(){
  let peso = document.getElementById('peso')
  let atualPeso = parseInt(peso.value)
  let novoPeso = atualPeso - 1;
  peso.value = novoPeso;
}

function maisAltura(){
  let altura = document.getElementById('altura')
  let atualAltura = parseFloat(altura.value)
  let novaAltura = atualAltura + 0.01
  altura.value = novaAltura
}

function menosAltura(){
  let altura = document.getElementById('altura')
  let atualAltura = parseFloat(altura.value)
  let novaAltura = atualAltura - 0.01
  altura.value = novaAltura
}

function calcularIMC(){
  let altura = document.getElementById('altura').value;
  let peso = document.getElementById('peso').value;
  let imc = peso/(altura * altura)
  let resultado = document.getElementById('imc')
  resultado.textContent = imc.toFixed(0)
  mensagemIMC(imc)
}

function mensagemIMC(imc){
  if(imc > 17 && imc <= 25){
    let mensagem = document.getElementById('mensagem')
    mensagem.textContent = 'Nus conformi!'
  }else if(imc > 25){
    mensagem.textContent = 'Fofinho'
  }else if(imc <= 17){
    mensagem.textContent = 'Magrão'
  }else{
    mensagem.textContent = 'Resultado invalido!'
  }
}