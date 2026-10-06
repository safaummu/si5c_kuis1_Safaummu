const express = require('express');
const router = express.Router();

const gymMemberController = require('../controllers/gymMemberController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', gymMemberController.getAll);

router.get('/:id', gymMemberController.getById);

router.post('/', cekApiKey, gymMemberController.create);

router.put('/:id', cekApiKey, gymMemberController.update);

router.delete('/:id', cekApiKey, gymMemberController.remove);

module.exports = router;