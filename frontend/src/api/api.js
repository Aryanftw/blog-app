import axios from "axios"

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:8000/api/blog"
})

//blog endpoints

export const postblog = (data) => {
  return API.post('/create',data)
}

export const getallblogs = () => {
  return API.get('/blogs')
}

export const latestblogs = () => {
 return API.get('/')
}

export const getblogsbytitle = (title) => {
  return API.get('/title',{params:{title}})
}

export const getblogbyId = (id) => {
  return API.get(`/${id}`)
}