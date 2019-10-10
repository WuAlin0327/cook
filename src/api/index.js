import axios from 'axios'
axios.defaults.withCredentials=true
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-fromurlencodeed';
// axios.defaults.baseURL = 'http://restful.l.onebound.cn';
const GetCookBook = ()=>{
    return axios.get('/cookbook').then();
}
const GetCookList = (id,page)=>{
    return axios.get('/cooklist/'+id+'?page='+page).then();
}

const GetDetail = (id)=>{
    return axios.get('/cookdetail/'+id).then();
}
const GetPromote = ()=>{
	return axios.get('/promote').then()
}

export default{
    GetCookBook,
    GetCookList,
    GetDetail,
	GetPromote
}