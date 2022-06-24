function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var date = new Date()
var hora = date.getHours()

msg.innerHTML = `Agora São ${hora} horas.`

if (hora  >= 0 && hora <= 12) {
   
    img.src = 'imagens/manha.png'
    document.body.style.background = '#b8ad8b'

}

else if (hora >=12 && hora <= 18) { 
    
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#8d765f'

}

else {
    
    img.src = 'imagens/noite.png'
    document.body.style.background = '#0a2f57'
}

}