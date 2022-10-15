import data from "../data/dataUser.json"

export const getHasStatus = () =>{
    return data.filter((e)=>(
        e.story.length > 0
    ))
}

export const getAuthUser = () =>{
    return data.filter((e)=>(
        e.auth
    ))[0]
}

export const getUserByName = (str="") =>{
    return data.filter((e)=>{
        return e.username.toLowerCase().match(str.toLowerCase())
    })
}