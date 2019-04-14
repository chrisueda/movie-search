import axios from "axios"

const API_KEY = "403ffcb3b4481da342203f94fb6e937e"

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY
  }
})
