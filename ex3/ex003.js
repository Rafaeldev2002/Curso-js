function contar() {
    var inic = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')


    if (inic.value.length == 0 || fim.value.length == 0 ||  passo.value.length == 0) {
        res.innerHTML = 'arroz'
    window.alert = ('Impossivel contar!')
    
    } else {}
        res.innerText = 'Contando:'
        var i = Number(inic.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert('passo invalido!')
            }
        if (i < f) {
            for(var c = i; c <= f; c += p) {
                        res.innerHTML += ` ${c} ` 
                    }
             { for(var c = i; c >= f; c -= p) 
                res.innerHTML += `${c} oi`
            }
        }  
           
    }
