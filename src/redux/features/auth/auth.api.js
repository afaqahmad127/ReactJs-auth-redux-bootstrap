import { MyAxios } from '../../axios/index.js';
import { apiConsts } from '../../axios/constants';
export const login = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      email: email,
      password: password,
    });

    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URI}${apiConsts.authLogin}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    MyAxios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
export const signUp = ({ email, password, name }) => {
  return new Promise((resolve, reject) => {
    var data = JSON.stringify({
      name: name,
      email: email,
      password: password,
    });

    var config = {
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URI}${apiConsts.authSignUp}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    MyAxios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
export const profile = () => {
  return new Promise((resolve, reject) => {
    var config = {
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URI}${apiConsts.userProfile}`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    };
    MyAxios(config)
      .then(function (response) {
        console.log(response.data);
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
