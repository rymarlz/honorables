const { response } = require('express');

const usuarioGet = (req, res = response) => {
    const { q, nombre, apikey } = req.query;
    res.json({
        msg: 'get get',
        q,
        nombre,
        apikey
    })
}

const usuarioPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.json({

        nombre,
        edad,
    })
}

const usuarioPatch = (req, res) => {

    res.json({
        msg: 'get patch'
    })
}
const usuarioDelete = (req, res) => {

    res.json({
        msg: 'get delete'
    })
}
const usuarioPut = (req, res = response) => {
    const { id } = req.params;

    res.json({
        msg: 'get put',
        id
    })
}

module.exports = {
    usuarioGet,
    usuarioDelete,
    usuarioPost,
    usuarioPatch,
    usuarioPut,
}