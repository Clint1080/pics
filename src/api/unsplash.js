import axios from "axios";

export default axios.create({
  baseURL: "https:api.unsplash.com",
  headers: {
    Authorization: "Client-ID m1VM_C0mYIPUvKrefnLE2hb5563n2ipvRWA7O6Qdfho",
  },
});
