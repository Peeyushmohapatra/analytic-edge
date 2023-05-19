export async function allUserData(dispatch){
    const apiCall = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await apiCall.json();
    // console.log(response);
    dispatch({
        type:"all-users",
        data:response
    })
}

export async function pageWiseData(page,setState){
    // console.log(page,"Page");
    const apiCall = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=10`);
    const response = await apiCall.json();
    // console.log(response);
    setState(response)
}

export async function commentFun(id,setComment){
    // console.log(id,"Comments");
    const apiCall = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    const response = await apiCall.json();
    // console.log(response,"Comments");
    setComment(response)
}

export async function userDetail(id,dispatch){
    console.log(id,"Comments");
    const apiCall = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
    const response = await apiCall.json();
    // console.log(response,"UserData");
    dispatch({
        type:"user-details",
        data:response[0]
    })
}


export function filterFunction(searchData,allUsers,setData){
    setData(allUsers.filter((user) => {
        return user.body.toUpperCase().includes(searchData.toUpperCase())
    }))
}