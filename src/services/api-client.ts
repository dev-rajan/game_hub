import axios,  { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dc401f971e724a059e882351a535b2c7",
  },
});

export { CanceledError };
