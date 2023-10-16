import React from 'react'
import SessionInProgress from './SessionInprogress/SessionInProgress'
import UpcommingSession from './UpcommingSession/UpcommingSession'
import CompletedSession from './CompletedSession/CompletedSession'

const Session = () => {
  return (
    <>
    <div className='flex justify-between mt-6 p-4 '>
        <div><h1 className='text-2xl'> Sessions</h1>
        </div>
        <div>
        <input
            type="Search"
            name="password"
            
            placeholder='Search'
            className="shadow appearance-none border rounded mr-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <select
            name="role"
      
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="admin">This Month</option>
            <option value="moderator">Last Week</option>
            <option value="user">Last Month</option>
          </select>
        </div>
        
        </div>
        <div className='w-full px-2 py-2 border bg-slate-100'>
            <h1 className='text-xl'>Amount available for Withdraw: <span className='ml-4 text-xl font-bold text-blue-950'>136</span></h1>
        </div>
    <div className='p-4'>
    
    <SessionInProgress/>
    </div>

    <div className='flex p-4'>
      <div className='p-2'><UpcommingSession/></div>
      <div className='p-2'><CompletedSession/></div>
    </div>
    </>
  )
}

export default Session