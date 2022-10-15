import React from 'react'

const Status = () => (
    <div className="flex bg-white py-6 border-[1px] border-[#00000011] rounded-lg">
        test
    </div>
)

export default function Card({_for}) {
    if(_for == "status"){
        console.log("A");
        return (
          <Status/>
        )
    }
}
