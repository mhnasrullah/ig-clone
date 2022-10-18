import user from "../data/dataUser.json"
import suggest  from "../data/suggestUserData.json"

export const getHasStatus = (data) =>{
    return data.filter((e)=>(
        e.story.length > 0
    ))
}

export const getAuthUser = (data) =>{
    return data?.filter((e)=>(
        e.auth
    ))[0]
}

export const getUserByName = (str="") =>{
    return user.filter((e)=>{
        return e.username.toLowerCase().match(str.toLowerCase())
    })
}

export const getAllSuggest = () => {
    return suggest;
}