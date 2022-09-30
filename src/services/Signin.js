import axiosClient from "./Api";
import endpoints from "./Endpoints";



  export const userSignin = async payload => {
    console.log(payload)
    try {
      let response = await axiosClient.post(endpoints.singin, payload);
      return response;
    } catch (e) {
      throw e;
    }
  };