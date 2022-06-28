function calcular() {
    var numb = document.getElementById = ('txtn')
    var tab = document.getElementById = ('seltab')
    if (numb.value.length == 0 ) {
        window.alert('ensira um valor')
    } else {
        var n = Number(numb.value)
        var c = 1
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }







}