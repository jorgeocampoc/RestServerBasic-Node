const { Router } = require('express');
const { usersGet, usersUpdate, usersPost, usersDelete } = require('../controllers/users');


const router = Router();

router.get('/', usersGet)
router.post('/', usersPost)
router.delete('/:id', usersDelete)
router.put('/', usersUpdate)


module.exports = router;