const options = {
  mode: 'cors',
  headers: {
    'Content-type': 'application/json',
    credentials: 'include',
  },
}

const BASE_URL = 'http://localhost:4000'
const fetchData = (url, fetchOptions) => {
  const data = fetch(`${BASE_URL}/${url}`, fetchOptions)
  .then(response => response.json())
  .catch(err => { console.error('Failed retrieving information', err)})


  return data
}

const get = url => {
  const optionsGet = {
    ...options,
    method: 'GET',
  }
  
  const data = fetchData(url, optionsGet)
  
  return data
}

const post = payload => {
  const optionsPost = {
    ...options,
    method: 'POST',
    body: JSON.stringify(payload)
  }
  const data = fetchData('phoneBook', optionsPost)

  return data
}

const put = (url ,payload) => {
  const optionsPut = {
    ...options,
    method: 'PUT',
    body: JSON.stringify(payload)
  }
  const data = fetchData(url, optionsPut)

  return data
}

export default { 
  get,
  post,
  put
}