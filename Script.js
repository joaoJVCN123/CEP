let resposta = document.getElementById('resposta')
let consultar = document.getElementById('Consultar')

consultar.addEventListener('click', ()=>{
    let endereco = document.getElementById('endereco').value

    fetch('https://viacep.com.br/ws/'+endereco+'/json/')
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)
        resposta.innerHTML = 'CEP: ' + dados.cep + "<br>"
        resposta.innerHTML += ' localidade: ' + dados.localidade + "<br>"
        resposta.innerHTML += ' logradouro: ' + dados.logradouro + "<br>"
        resposta.innerHTML += ' bairro: ' + dados.bairro + "<br>"
        resposta.innerHTML += ' Estado: ' + dados.uf + "<br>"
        
    })
    .catch((err)=>{
        console.log('erro ao encontrar dados', err)
    })
})