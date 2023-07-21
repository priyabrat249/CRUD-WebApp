import express, {Router} from "express";
import { loginUser,signUp,addUser, getUsers,getUser,editUser,deleteUser} from "../Controllers/controller.js"

const router = express.Router();

router.post('/Add', addUser);
router.post('/signup', signUp);
router.post('/login',loginUser );
router.get('/All', getUsers);
router.get('/:userId', getUser);
router.post('/:userId', editUser);
router.delete('/:userId', deleteUser);

export default router;
