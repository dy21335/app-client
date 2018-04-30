const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAll = (query) =>{
    query = query.trim();
    let url = `http://localhost:5001/${query}`;
    return fetch(`${url}`, {
        method: 'GET',
        headers
    }).then(res => res.json())
}


