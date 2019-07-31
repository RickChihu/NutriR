function IMC() {
  var peso = getValue('peso')
  var talla = getValue('talla')
  talla = talla/100
  var imc = peso / (talla * talla)
  var texto = ''
  if (imc < 16) {
    texto = "Delgadez severa"
  } else if (imc < 17){
    texto = "Delgadez moderada"
  } else if (imc < 18.5){
    texto = "Delgadez aceptable"
  } else if (imc < 25){
    texto = "Normal"
  } else if (imc < 30){
    texto = "Preobeso"
  } else if (imc < 35){
    texto = "Obeso 1"
  } else if (imc < 40){
    texto = "Obeso 2"
  } else {
    texto = "Obeso 3"
  }
  document.getElementById('imc').value = imc.toFixed(2)
  if (imc) {
    document.getElementById('imcTexto').value = texto
  }
}

function ICC() {
  var cintura = getValue('cintura')
  var cadera = getValue('cadera')
  var icc = cintura / cadera
  var texto = ''
  document.getElementById('icc').value = icc.toFixed(2)
  if (getSex() === 'H') {
    if (icc > .95){
      texto = 'Obesidad central'
    } else {
      texto = 'Obesidad generalizada'
    }
  }
  if (getSex() === 'M') {
    if (icc > .80){
      texto = 'Obesidad central'
    } else {
      texto = 'Obesidad generalizada'
    }
  }
  if (icc){
    document.getElementById('iccTexto').value = texto
  }
}

function pesoIdeal() {
  var talla = getValue('talla')
  var imcIdeal = getValue('imcIdeal')
  var pesoIdeal = (talla * talla * imcIdeal) / 10000
  document.getElementById('pesoIdeal').value = pesoIdeal.toFixed(2)
}

function getSex() {
  if(document.getElementById('sexoH').checked) {
    return 'H'
  }
  else if (document.getElementById('sexoM').checked) {
    return 'M'
  }
}
