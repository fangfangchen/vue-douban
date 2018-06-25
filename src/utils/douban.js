import axios from 'axios';

function fetchData(type, params) {
  return new Promise((resolve, reject) => {
    axios(`/data-api/movie/${type}`, {
      params: Object.assign({}, params),
    })
    .then(res => {
      if (res.status === 200) {
        resolve && resolve(res);
      } else {
        reject && reject(error);
      }
    })
    .catch(error => {
      reject && reject(error);
    });
  });
}

export default {
  find(type, page = 1, count = 20, search ='') {
    const params = { start: (page - 1) * count, count };
    return fetchData(type, search ? Object.assign(params, { q: search }) : params);
  },

  findOne(id) {
    return fetchData('subject/' + id);
  }
};