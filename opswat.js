const axios = require('axios');

const OpswatAPI = {

  baseUrl: 'https://api.metadefender.com/v4',
  apiKey: 'KEy',  // Copy paste the API key keep quotes and comma


  getHashLookup: function(hash) {   //Method to getHash
    const url = this.baseUrl + '/hash/' + hash; //hash
    const getRequest = {    //Get request
      method: 'get',
      headers: {
        apikey: this.apiKey     //api key pass
      }
    }

    return axios(url, getRequest)

    .then((response) => response.data)
    
    .catch((error) => {
      console.log('Check API key?');
      return Promise.reject('Invalid server response');
    });
  },

  getScanReport: function(dataId) {
    const url = this.baseUrl + '/file/' + dataId;   //
    const getRequest = {
      method: 'get',
      headers: {
        apikey: this.apiKey
      }
    }

    return axios(url, getRequest)

    .then((response) => response.data)
    
    .catch((error) => {
      return Promise.reject('Invalid server response');
    });
  },

  postFileUpload: function(file) {
    const url = this.baseUrl + '/file/';    //posst method for file
    const postRequest = {
      method: 'post',
      headers: {
        apikey: this.apiKey
      },
      data: file
    }

    return axios(url, postRequest)

    .then((response) => response.data)
    
    .catch((error) => {
      return Promise.reject('Invalid server response');
    });
  }
}

module.exports = OpswatAPI;
