const mongoose = require('mongoose');

//Schema -> tabela do user do Banco
const UsuarioSchema = new mongoose.Schema({
    nome  : {
        type: String,
        max:  50,
        required: [true, 'Nome obrigatorio']
    },
    email : {
        type: String,
        required: [true, 'E-mail obrigatorio']
    },
    senha : {
        type: String,
        required: [true, 'senha obrigatoria'],
        max:  20,
        min:  5
    },
    descricao       : String,
    imagemPerfil    : String,
    avaliacao       : Number,
    favoritosIds    : [String]
});


module.exports = mongoose.model('Usuario', UsuarioSchema);