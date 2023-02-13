var list = []

function adicionar(){
    let num = document.getElementById('txtnum').value

    if(list.length >= 5){
        alert('Numero maximo atingido')
    }else{
        list.push(num)
        res.innerHTML += `O numero ${num} foi adicionado<br>`
    }

}

function sortear(){
    const NumeroSorteado = Math.floor(Math.random() * list.length )

    sort.innerHTML = `O numero sorteado foi ${list[NumeroSorteado]}`
}