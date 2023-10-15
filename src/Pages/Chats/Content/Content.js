import React from 'react'

const Content = () => {
  return (
    <div className=" mr-2">
    <label className="block text-gray-700 text-sm font-bold mb-2">Content <span className='text-red-500'>*</span></label>
    <select
      name="role"
    
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    >
      <option value="admin" selected>Select...</option>
      <option value="moderator">Email</option>
      <option value="user">Job Post</option>
      <option value="user">Notification</option>
      <option value="user">Payment Package</option>
    </select>
  </div>
  )
}

export default Content