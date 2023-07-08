import express, {Router} from "express";
import { addUser, getUsers,getUser,editUser,deleteUser} from "../Controllers/controller.js"

const router = express.Router();

router.post('/Add', addUser);
router.get('/All', getUsers);
router.get('/:userId', getUser);
router.post('/:userId', editUser);
router.post('/:userId', deleteUser);

export default router;
