import React from 'react'
import Link from 'next/link'

const Linked = ({children,href,id,active,className,setActive,...props}) => {
    return(
        <Link href={href}>
            <a {...props} onClick={()=>setActive(id)} className={`${className}`}>
                {children}
            </a>
        </Link>
    )
}

export default function Anchor({type,children,...props}) {
    if(type == "link"){
        return <Linked {...props}>{children}</Linked>
    }
}
