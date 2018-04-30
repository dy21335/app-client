import fetchJsonp from 'fetch-jsonp'

export const getAllJsonp = (query) => {
    query = query.trim();
    let url = `http://suggest.taobao.com/sug?code=utf-8&q=${query}`;
    return fetchJsonp(`${url}`).then((res)=>res.json());
};

