import express from 'express';
import users from './users';
import policy from './policy';

const router = express();

const USERS = '/users';
const POLICY = '/policy';

router.use(USERS, users);
router.use(POLICY, policy);

export default router;
