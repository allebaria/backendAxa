import axios from 'axios';
import { urls } from '../config';

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    axios.get(urls.GET_USERS_LIST)
      .then((users) => resolve(users.data.clients))
      .catch(err => reject(err))
  });
};

export const getPolicies = () => {
  return new Promise((resolve, reject) => {
    axios.get(urls.GET_POLICIES_LIST)
      .then((policies) => resolve(policies.data.policies))
      .catch(err => reject(err))
  });
}

export const findUserById = (userId) => {
  return new Promise((resolve, reject) => {
    var foundUser = null;

    getUsers()
      .then(users => {
        foundUser = users.find(user => {
          return user.id === userId;
        });
        resolve(foundUser)
      })
      .catch(err => reject(err));
  });
};

export const findUserByName = (userName) => {
  return new Promise((resolve, reject) => {
    var foundUser = null;

    getUsers()
      .then(users => {
        console.log(userName)
        foundUser = users.find(user => {
          return user.name === userName;
        });
        resolve(foundUser);
      })
      .catch(err => reject(err));
  });
}

export const findUserByPolicyNumber = (policyNum) => {
  return new Promise((resolve, reject) => {
    var policyFound = null;

    getPolicies()
      .then(policies => {
        policyFound = policies.find(policy => {
          return policy.id === policyNum;
        });
        findUserById(policyFound.clientId)
          .then(foundUser => resolve(foundUser))
          .catch(err => reject(err))
      })
      .catch(err => reject(err));

  });
};

export const findPoliciesByUserName = (userName) => {
  return new Promise((resolve, reject) => {
    var foundPolicies = null;

    findUserByName(userName)
      .then(user => {
        getPolicies()
          .then(policies => {
            foundPolicies = policies.filter(policy => {
              return policy.clientId === user.id;
            })
            resolve(foundPolicies);
          })
          .catch(err => reject(err))
      })
      .catch(err => reject(err))
  });
}
