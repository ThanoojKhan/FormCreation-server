const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/submit', userController.handleFormSubmission);
router.post('/login', userController.handleLogin);

router.get('/getMethod', userController.getMethod);
router.patch('/patchMethod', userController.patchMethod);
router.delete('/deleteMethod', userController.deleteMethod);
router.put('/putMethod', userController.putMethod);

module.exports = router;
