const { Router } = require('express');
const { usuarioGet, usuarioDelete, usuarioPut, usuarioPost, usuarioPatch } = require('../controllers/usuarios.controller')

const router = Router();

router.get('/', usuarioGet);

router.put('/:id', usuarioPut);

router.post('/', usuarioPost);

router.delete('/', usuarioDelete);

router.patch('/', usuarioPatch);


module.exports = router;