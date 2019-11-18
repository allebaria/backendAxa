import express from 'express';
import policy from './controller';
import { userAuthByNameAndAdmin } from '../../services';

const router = express.Router()

//ROUTES
const GET_POLICY_BY_USER_NAME = '/name/:name';

router.get(GET_POLICY_BY_USER_NAME, userAuthByNameAndAdmin, policy.getPolicyByUserName);

export default router;
