function getValue(id) {
  return parseFloat(document.getElementById(id).value)
}

function getSex() {
  if(document.getElementById('sexoH').checked) {
    return 'H'
  }
  else if (document.getElementById('sexoM').checked) {
    return 'M'
  }
}
