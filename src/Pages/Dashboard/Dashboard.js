import React from 'react'
import States from './States'
import SessionInProgress from './SessionInProgress'
import NewEnrolledStudents from './NewEnrolledStudents'
import ManagerTable from './ManagerTable'

const Dashboard = () => {
  return (
    <>
    <States/>
    <div className='flex '>
      <div className='w-3/5 p-4'>
    <SessionInProgress/>
    </div>
    <div className='w-2/5 p-4'>
      <NewEnrolledStudents/>
    </div>
    </div>
    <div className='w-1/4'>
    <ManagerTable/>
    </div>
    </>
  )
}

export default Dashboard