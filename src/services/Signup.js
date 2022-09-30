import axiosClient from "./Api";
import endpoints from "./Endpoints";



  export const userRegister = async payload => {
    console.log(payload)
    try {
      let response = await axiosClient.post(endpoints.signup, payload);
      return response;
    } catch (e) {
      throw e;
    }
  };