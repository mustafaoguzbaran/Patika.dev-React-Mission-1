import axios from "axios";
 async function getData(userid) {
    const {data: user} = await axios(`https://jsonplaceholder.typicode.com/users/${userid}`)
    const {data: post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
    return {user, post}
}
export default getData