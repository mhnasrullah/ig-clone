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