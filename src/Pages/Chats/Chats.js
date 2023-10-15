import React from 'react'
import Editor from './Editor/Editor'
import Content from './Content/Content'
const Chats = () => {
  return (
    <>
    
    
    
    <div className='flex p-4 bg-slate-50'>
        <div className='w-1/2 '>
            <Content/>
        </div>
        <div className='w-1/2'><Editor/></div>
        </div></>
  )
}

export default Chats
