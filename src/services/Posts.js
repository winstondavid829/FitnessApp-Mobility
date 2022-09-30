import axiosClient from './Api';
import endpoints from './Endpoints';

export const getUserFriendPost = async payload => {
  try {
    let response = await axiosClient.post(endpoints.FriendPosts, payload);
    return response;
  } catch (e) {
    throw e;
  }
};

export const getUserPost = async payload => {
  try {
    let response = await axiosClient.post(endpoints.GetUserPost, payload);
    return response;
  } catch (e) {
    throw e;
  }
};



export const postToGC = async payload => {
  try {
    let headers = {
     "Content-Type": 'multipart/form-data',
      "Authorization":'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJlbnRlcnRhaW5tZW50LWRldi5lbmRwb2ludHMuaWNvbmljLXJ1bGVyLTM2MzcwMi5jbG91ZC5nb29nIiwiZXhwIjoxNjY5NzM4NzU2LCJpc3MiOiJlbnRlcnRhaW5tZW50LXJlZ2lzdHJ5QGljb25pYy1ydWxlci0zNjM3MDIuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20ifQ.rMKHFA7ab62KQm9biqSqXGcUJv4my62Z_pYLdz7tGaJ-bxMK5rgdPUuGT7PVBkQbWhyKcVk91nB7ZNb3IMoZVKVhNML3uyfgrEDNjIH4rmjkycDfn14742l3nXqdHxeV1Ia4V1oJkYIFUIam1WaaXXbpy31g7ZkNcy_rTBs9h_bw3MUfPacStbs-bn8FY8fGGOY6Zd4WcL2T-IDDFtcVdgOX1nTjEOYxvBACNbf6veOR64ITL94JjxzalEpOxo_5055ZLo0XEJkc_U7v3K8BKMnoIRIHXjId30ZFWKZqWM9RhQphhoAgkxVpWUHanXojs-EE5l4zawmc1Gi7sLlD8w'
    };


    let response = await axiosClient.post(endpoints.PostToCloud,payload,{
      headers: headers,
    })

    return response;
  } catch (e) {
    console.log('the eror in service', e);
    throw e;
  }
};


export const createUserPost = async payload => {
  try {
    let response = await axiosClient.post(endpoints.CreateUserPost,payload);
    return response;
  } catch (e) {
    throw e;
  }
};
