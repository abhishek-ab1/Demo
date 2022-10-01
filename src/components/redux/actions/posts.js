import axios from 'axios'
import * as actionTypes from '../actionTypes'

const req = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com/",
})

export const getAllPosts = (callBack=null) => dispatch => {
    req.get("posts").then(res=> {
        if(res)
            dispatch({
                type : actionTypes.GET_POSTS,
                payload : res.data || []
             })
    }).catch(error => {
        console.log(error)
    }).finally(res => {
        console.log("Received response")
    })
}

export const createPost = (data, callBack=null) => dispatch => {
    req.post("posts", data).then(res=> {
        console.log(res)
        if(res)
            dispatch({
                type : actionTypes.CREATE_POST,
                payload : res.data || []
             })
    }).catch(error => {
        console.log(error)
    }).finally(res => {
        console.log("Received response")
    })
}

export const getPost = (id, callBack=null) => dispatch => {
    req.get(`posts/${id}`).then(res=> {
        console.log(res)
        if(res)
            dispatch({
                type : actionTypes.FETCH_POST,
                payload : res.data || []
            })
    }).catch(error => {
        console.log(error)
    }).finally(res => {
        console.log("Received response")
    })
}


