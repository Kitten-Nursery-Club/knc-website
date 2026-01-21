import axios from "axios"

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WP_API_URL ?? "kittennurseryclub.local/wp-json/wp/v2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: false,
})

export default apiClient
