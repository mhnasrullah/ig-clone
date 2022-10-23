import React from 'react'

export default function Tooltip({label,_for}) {
    
    if(_for == "nav"){
        return <div className='flex items-center'>
            <div className='-rotate-90 h-3 w-fit'>
                <svg viewBox="0 0 106 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 69.5C29.2 69.5 47.5 23.5 53 0.5V69.5H0Z" fill="white"/>
                    <path d="M106 69.5C76.8 69.5 58.5 23.5 53 0.5V69.5H106Z" fill="white"/>
                </svg>
            </div>
            <div className="bg-white p-2 -ml-1 rounded-lg w-fit text-center">navtooltip</div>
        </div>
    }
  return (
    <div>Tooltip</div>
  )
}
