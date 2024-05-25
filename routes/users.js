
// Создаём роут для запросов категорий 
const usersRouter = require('express').Router();
  
// Импортируем вспомогательные функции
const { findAllUsers } = require('../middlewares/users');
const { sendAllUsers } = require('../controllers/users');
const { createUser } = require('../middlewares/users');
const { sendUserCreated } = require('../controllers/users');
const { findUserById } = require('../middlewares/users');
const { sendUserById } = require('../controllers/users');
const { updateUser } = require('../middlewares/users');
const { sendUserUpdated } = require('../controllers/users');
const { deleteUser } = require('../middlewares/users');
const { sendUserDeleted } = require('../controllers/users');
const { checkIsUserExists } = require('../middlewares/users');
const { checkEmptyNameAndEmailAndPassword } = require('../middlewares/users');
const { checkEmptyNameAndEmail } = require('../middlewares/users');
const { filterPassword } = require('../middlewares/users');
const { hashPassword } = require('../middlewares/users');
const { checkAuth } = require('../middlewares/auth');
const { sendMe } = require('../controllers/users');
  
// Обрабатываем GET-запрос с роутом '/categories'
usersRouter.get('/users', findAllUsers, filterPassword, sendAllUsers);
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated
);
usersRouter.get('/users/:id', findUserById, filterPassword, sendUserById);
usersRouter.get("/me", checkAuth, sendMe);
usersRouter.put(
    "/users/:id", // Слушаем запросы по эндпоинту
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser, // Обновляем запись в MongoDB
    sendUserUpdated // Возвращаем ответ на клиент
);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
  
// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;
  
