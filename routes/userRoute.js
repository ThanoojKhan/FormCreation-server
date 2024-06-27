const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/submit', userController.handleFormSubmission);
router.post('/login', userController.handleLogin);

router.get('/get', userController.getMethod);
router.patch('/patch', userController.patchMethod);
router.delete('/delete', userController.deleteMethod);
router.put('/put', userController.putMethod);

module.exports = router;
