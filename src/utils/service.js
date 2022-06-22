import API from "./api";

class ServiceHomepage {
  getAllList() {
    return API.get(`https://swapi.dev/api/people/?page=1`);
  }

  getDetailList(url) {
    return API.get(url);
  }
}
export default ServiceHomepage;
