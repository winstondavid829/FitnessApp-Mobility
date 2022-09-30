import axiosClient from "./Api";
import endpoints from "./Endpoints";



  export const musicList =async () => {
  
    try {
      let response = await axiosClient.post(endpoints.musicList);
      return response;
    } catch (e) {
      throw e;
    }
  };