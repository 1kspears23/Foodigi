import axios from 'axios';

const send = {
  sendSMS: (to, message) => {
    const reqURI = `/api/v1/search?food=${food}&cll=${lat},${long}`;
    return axios.get(reqURI)
      .then(results =>
        // handle error
        new Promise((resolve) => {
          resolve(results.data);
        })
      );
  },
};

export default send;
