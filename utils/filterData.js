
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

export const getUserByName = (str="",data) =>{
    return data.filter((e)=>{
        return e.username.toLowerCase().match(str.toLowerCase())
    })
}