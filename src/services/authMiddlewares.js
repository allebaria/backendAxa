import { findUserById, findUserByName, findUserByPolicyNumber } from './';

export const userAuthById = (req, res, next) => {
  console.log(req.params);
  if(!req.params.id) return res.status(404).json({ status: 404, msg: 'Empty id.' });

  const userId = req.params.id;
  findUserById(userId)
    .then(user => {
      if(!user) return res.status(404).json({ status: 404, msg: 'User not found.' })
      if(user.role === "admin" || user.role === "user") {
        req.user = user;
        next();
      } else {
        return res.status(401).json({ status: 401, msg: 'User not authorized.' })
      }
    })

};

export const userAuthByName = (req, res, next) => {
  if(!req.params.name) return res.status(404).json({ status: 404, msg: 'Empty name.' });

  const userName = req.params.name;
  findUserByName(userName)
    .then(user => {
      if(!user) return res.status(404).json({ status: 404, msg: 'User not found.' })
      if(user.role === "admin" || user.role === "user") {
        req.user = user;
        next();
      } else {
        return res.status(401).json({ status: 401, msg: 'User not authorized.' })
      }
    })
};

export const userAuthByNameAndAdmin = (req, res, next) => {
  if(!req.params.name) return res.status(404).json({ status: 404, msg: 'Empty name.' });

  const userName = req.params.name;
  findUserByName(userName)
    .then(user => {
      if(!user) return res.status(404).json({ status: 404, msg: 'User not found.' })
      if(user.role === "admin") {
        req.user = user;
        next();
      } else {
        return res.status(401).json({ status: 401, msg: 'User not authorized.' })
      }
    })
}

export const userAuthByPolicyNum = (req, res, next) => {
  if(!req.params.policy_num) return res.status(404).json({ status: 404, msg: 'Empty policy number.' });

  const policyNumber = req.params.policy_num;
  findUserByPolicyNumber(policyNumber)
    .then(user => {
      if(!user) return res.status(404).json({ status: 404, msg: 'User not found.' })
      if(user.role === "admin" ) {
        req.user = user;
        next();
      } else {
        return res.status(401).json({ status: 401, msg: 'User not authorized.' })
      }
    })
};
