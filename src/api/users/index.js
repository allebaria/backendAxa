import express from 'express';
import users from './controller';
import { userAuthById, userAuthByName, userAuthByPolicyNum } from '../../services';

const router = express.Router()

//ROUTES
const GET_USER_BY_ID = '/id/:id';
const GET_USER_BY_NAME = '/name/:name';
const GET_USER_BY_POLICY_NUMBER = '/policy_num/:policy_num'

router.get(GET_USER_BY_ID, userAuthById ,users.getUserById);
router.get(GET_USER_BY_NAME, userAuthByName ,users.getUserByName);
router.get(GET_USER_BY_POLICY_NUMBER, userAuthByPolicyNum, users.getUserByPolicyNumber);


export default router;
