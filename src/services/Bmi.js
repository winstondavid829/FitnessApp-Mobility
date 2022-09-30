import axiosClient from "./Api";
import endpoints from "./Endpoints";



  export const getUserBmi =async (payload) => {
  
    try {
      let response = await axiosClient.post(endpoints.GetBmi,payload);
      return response;
    } catch (e) {
      throw e;
    }
  };