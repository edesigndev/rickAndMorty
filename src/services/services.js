import axios from "axios";
import services from "./methods";

const ServiceApp = {};

ServiceApp.getCharacters = (name, status) => {
    return axios.get(`${services.getCharacters}/?name=${name}&status=${status}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  export default ServiceApp;