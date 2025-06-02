function classificaIdade(idade) {
  if (idade < 12) {
    return 'criança';
  } else if (idade < 18) {
    return 'adolescente';
  } else {
    return 'adulto';
  }
}

module.exports = classificaIdade;
