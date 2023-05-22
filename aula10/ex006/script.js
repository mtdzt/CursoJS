var a = window.document.querySelector('div#area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)
function clicar() {
  
  a.innerText = 'CLICOU'
}
function entrar() {
  
  a.innerText = 'ENTROU'
}
function sair() {
  a.innerText = 'SAIU'
}