import React, { useState } from 'react';

const AddAdmin = () => {
  const [formData, setFormData] = useState({
    profilePhoto: '',
    adminName: '',
    adminEmail: '',
    password: '',
    role: '',
    timezone: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className=" mx-auto mt-10 p-6 ">
        <h1>Add Admin</h1>
      <form onSubmit={handleSubmit} className='border bg-gray-100 rounded-md p-6'>
      <div className="mb-4 border rounded-full w-32 h-32 relative">
  <input
    type="file"
    id="profilePhotoInput"
    name="profilePhoto"
    onChange={handleChange}
    className="hidden"
  />
  <label
    htmlFor="profilePhotoInput"
    className="block text-gray-700 text-sm font-bold mt-14 ml-4 cursor-pointer"
  >
    Choose Photo
  </label>
</div>

        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Admin Name</label>
            <input
              type="text"
              name="adminName"
              value={formData.adminName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Admin Email</label>
            <input
              type="email"
              name="adminEmail"
              value={formData.adminEmail}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className='flex mb-4'>
        <div className="w-1/2 mr-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-1/2 mr-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
            <option value="user">User</option>
          </select>
        </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Timezone</label>
          <select
            name="timezone"
            value={formData.timezone}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="gmt">GMT</option>
            <option value="est">EST</option>
            <option value="pst">PST</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className='flex justify-center'>
        <button
          type="submit"
          className="bg-rose-900 hover:bg-rose-700 text-white mr-3 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
        <button
          type="submit"
          className="bg-gray-500 hover:bg-gray-700 text-black  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Anther
        </button>
        </div>
      </form>
    </div>
  );
};

export default AddAdmin;
