const controller = {};

controller.getUserById = (req, res) => {
  const user = req.user;
  res.json({ user });
  console.log('Get user by id')
}

controller.getUserByName = (req, res) => {
  const user = req.user;
  res.json({ user });
}

controller.getUserByPolicyNumber = (req, res) => {
  const user = req.user;
  res.json({ user });
}

export default controller;
