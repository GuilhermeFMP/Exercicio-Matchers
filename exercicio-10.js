function enviarMensagem(usuario, enviar) {
  enviar(usuario.email, 'Olá');
}

module.exports = enviarMensagem;
