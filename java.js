//  Validação Matemática (Algoritmo)
// Você pode verificar se um CPF é estruturalmente válido (tem 11 dígitos e passa no cálculo dos dígitos verificadores) sem usar a internet. 
// Regra geral: O CPF possui 11 dígitos. Os dois últimos são chamados de dígitos verificadores.
// Cálculo:
// Multiplica-se os nove primeiros dígitos por pesos decrescentes (iniciando em 10 e indo até 2).
// Soma-se os resultados e calcula-se o resto da divisão por 11.
// Se o resto for 0 ou 1, o primeiro dígito verificador é 0; caso contrário, é 11 menos o resto.
// O mesmo processo é repetido para o segundo dígito, incluindo o primeiro dígito calculado na soma.

let digitos = document.getElementById("digitos_cpf")
let botao = document.getElementById('butao')
let resultado = document.getElementById("res")

botao.addEventListener('click', () =>{
let s = 0
    for(let i = 10; i >= 2; i--){
  let indice 
  indice = 10 -i
  digitos.value[indice]
       s +=  Number(digitos.value[indice]) * i
    }

    let resto = s % 11
    let dv1
    if (resto < 2) {
        dv1 = 0
    }
    else{
        dv1 = 11 -resto
    }

    if (dv1 === Number(digitos.value[9])) {
        resultado.innerHTML = '<p> cpf valido </p>'
    }
    else{
        resultado.innerHTML = '<p> cpf invalido </p>'
    }

})
