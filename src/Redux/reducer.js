export const reducer = (state={allUsersData:[],userData:"",searchInput:""},action) => {
    if(action.type === "all-users"){
        return {
            ...state,
            allUsersData:action.data
        }
    }

    else if(action.type === "user-details"){
        console.log(action.data,"Reducer");
        return {
            ...state,
            userData:action.data
        }
    }

    else if(action.type === "search-input"){
        return {
            ...state,
            searchInput:action.data
        }
    }
    return state
}