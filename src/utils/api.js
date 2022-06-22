import axios from "axios";

const instance = axios.create({ timeout: -1 });

export default instance;
