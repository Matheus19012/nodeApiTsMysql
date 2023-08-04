import userController from "../controller/userController";

const express = require('express'); 
const router = express.Router(); 

//Listar usuários. 
router.get('/users', userController.getUsers );

//Cadastrar usuários.
router.post('/users', userController.postUser);

//Deletar usuário.
router.delete('/user/:id', userController.deleteUser);

export default router;