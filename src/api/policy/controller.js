import { findPoliciesByUserName } from '../../services';

const controller = {};

controller.getPolicyByUserName = (req, res) => {
  const user = req.user;

  findPoliciesByUserName(user.name)
    .then(policies => res.json({ policies }))
    .catch(err => res.status(500).json(err))
};

export default controller;
