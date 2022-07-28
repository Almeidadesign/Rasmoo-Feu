import axios from 'axios'
//08130050/json

const api = axios.create({
  baseURL: 'https:/viacep.com.br/ws/'
})

export default api
