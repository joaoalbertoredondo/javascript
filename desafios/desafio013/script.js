function entrar() {
    let nom = window.prompt('Qual é o nome do aluno?')
    let nota1 = Number(window.prompt(`Primeira nota de ${nom}:`))
    let nota2 = Number(window.prompt(`Segunda nota de ${nom}:`))

    let res = document.getElementById('result')

    res.innerHTML = `<h2>Analisando a situação de ${nom}</h2>`

    let media = (nota1 + nota2) / 2

    res.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a <strong> média é ${media}</strong>.</p>`

    if (media < 3) {
        res.innerHTML += `<p>Com média abaixo de 3,0, o aluno está <mark class="red"><strong>REPROVADO!</strong></mark></p>`
    }

    else if (media >= 3 && media < 6) {
        res.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está de <mark class="yellow"><strong>RECUPERAÇÃO!</strong></mark></p>`
    } 
    
    else {
        res.innerHTML += `<p>Com média acima de 6,0, o aluno está <mark class="green"><strong>APROVADO!</strong></mark></p>`
   }
}