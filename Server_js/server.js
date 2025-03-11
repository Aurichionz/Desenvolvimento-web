const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}));

app.post('/alunos', (req, resp) => {
console.log(req.body)
resp.send('<h1>[OK] Novo Cadastro Recebido!</h1>')
})

app.post('/alunos/:id', (req, resp) => {
    console.log(req.body)
    console.log(req.params.id)
    resp.send('<h1>[OK] Nova Alteração Recebida!</h1>')
    })
    console.log('Servidor Executando...')
    app.listen(3000)