import axios from ('axios');

const getUserInfo = (username, callback) => {
  axios({
    method: 'GET',
    url: `/api/${username}`
  }).then((res) => {
    callback(res.data);
  }).catch((err) => {
    callback(err)
  });
};

export default {
  getUserInfo
}