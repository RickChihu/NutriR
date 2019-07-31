function toggleSex(id) {
  if(id === 'sexoM'){
    document.getElementById('sexoH').checked = false
  } else if (id === 'sexoH'){
    document.getElementById('sexoM').checked = false
  }
}

function getValue(id) {
  return parseFloat(document.getElementById(id).value)
}
