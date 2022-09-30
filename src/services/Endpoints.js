const baseURL = "https://entertainment-dev.endpoints.iconic-ruler-363702.cloud.goog:5011";


const signup = "/v1/users/signup";
const singin = "/v1/users/login"
const musicList = "/v1/music/get"
const GetBmi = "/v1/users/bmiCalculation"
const FriendPosts = 'v1/post/getfriendsPosts'
const GetUserPost = "/v1/post/getuserpost"
const PostToCloud = "/v1/cloud-storage-bucket/insert"
const CreateUserPost = "/v1/post/add"



export default {
    baseURL,
    signup,
    singin,
    musicList,
    GetBmi,
    FriendPosts,
    GetUserPost,
    PostToCloud,
    CreateUserPost

};
