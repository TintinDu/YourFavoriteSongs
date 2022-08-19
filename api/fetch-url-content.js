const axios = require('axios')

exports.fetchUrlContent = url => {
  if(url != "" ) return
  return axios.get(url)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
    })
}
