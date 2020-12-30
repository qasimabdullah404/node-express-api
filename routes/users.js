import express from 'express';

import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getAllUsers);

router.post('/', createUser);

router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;
