function verificar() {
    let preco1 = Number(window.prompt('Qual era o preço anterior do produto?'))
    let preco1Cur = preco1.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})

    let preco2 = Number(window.prompt('Qual é o preço atual do produto?'))
    let preco2Cur = preco2.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})

    let subiu = preco2 - preco1
    let subiuCur = subiu.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})

    let caiu = preco1 - preco2
    let caiuCur = caiu.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})

    let perPos = (preco2 - preco1) / preco1 * 100
    let perPosD = perPos.toFixed(2)

    let perNeg = (preco1 - preco2) / preco2 * 100
    let perNegD = perNeg.toFixed(2)


    let res = document.getElementById('result')

    res.innerHTML = `<h2>Analisando os valores informados</h2>`
    res.innerHTML += `<p>O produto custava ${preco1Cur} e agora custa ${preco2Cur}.</p>`
    if (preco1 < preco2) {
        res.innerHTML += '<p>Hoje o produto está mais caro.</p>'
        res.innerHTML += `<p>O preço subiu ${subiuCur} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${perPosD}% para cima.</p>`
    } 
    
    else if (preco1 === preco2) {
        res.innerHTML += '<p>Não houve alteração no preço.</p>'
    } 
    
    else {
        res.innerHTML += '<p>Hoje o produto está mais barato.</p>'
        res.innerHTML += `<p>O preço caiu ${caiuCur} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${perNegD}% para baixo.</p>`
    }
}