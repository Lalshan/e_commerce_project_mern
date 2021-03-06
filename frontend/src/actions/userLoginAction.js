import axios from 'axios';
import { USER_LOGIN_FAILD, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../constants/userConstant';

export const login = (email,password) = async dispatch =>{
    try {
        dispatch({type:USER_LOGIN_REQUEST})
        const config = {headers:{'Contnet-type':'application/json'}}
        const {data} = await axios.post('/api/users/login',{email,password},Config)
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAILD,
            payload:
              error.response && error.response.data.message
                ? error.response.data.messag
                : error.message,
          });
    }
}