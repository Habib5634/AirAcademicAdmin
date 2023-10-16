import React, { useState } from 'react';
import requests from './ArchienedTutorData';

import {HiOutlineLocationMarker} from "react-icons/hi"
import {AiOutlineMail} from "react-icons/ai"
import {BsTelephone,BsFileText} from "react-icons/bs"
const TutorRequests = () => {
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [selectedDetail, setSelectedDetail] = useState(null); // New state for selected detail
  
    const handleRequestClick = (request) => {
      setSelectedRequest(request);
      setSelectedDetail("Qualification"); // Reset selected detail when a new request is selected
    };
  
    const handleDetailClick = (detail) => {
      setSelectedDetail(detail);
    };

  

  

  return (
    <div className="flex">
      <div className="w-1/4 p-4 mt-4">
        <div className=''>
          {requests.map((request) => (
            <div
              key={request.id}
              onClick={() => handleRequestClick(request)}
              className={`cursor-pointer hover:bg-gray-100 h-20 flex items-center p-2 mb-2 rounded-md ${
                selectedRequest && selectedRequest.id === request.id
                  ? 'bg-blue-200'
                  : ''
              }`}
            >
              <div><img src={request.tutorImageUrl} alt='img ' className='h-16 w-16 rounded-full' /> </div>
              <div className='flex flex-col ml-2'>
                <h1>{request.tutorName}</h1>
                <h1>{request.tutorEmail}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-3/4 p-4 flex mt-4 rounded-md shadow-md">
        {selectedRequest ? (
          <>
            <div className="bg-gray-50 flex flex-col justify-center items-center p-4 w-1/4 ">
              <img src={selectedRequest.tutorImageUrl} alt='img ' className='h-24 w-24 rounded-full' />
              <h3 className="text-xl font-bold my-2">{selectedRequest.tutorName}</h3>
              <p className='text-sm text-gray-600'>{selectedRequest.tutorEmail}</p>
              <p className='text-sm text-gray-400 my-4'><span>{selectedRequest.rating}</span>Reviews <span>{selectedRequest.reviews}</span></p>
              <div className='self-start space-y-3 text-gray-600 text-lg'>
              <h1 className='flex '><HiOutlineLocationMarker className='mt-1.5 mr-2'/><span>{selectedRequest.location}</span></h1>
                <h1 className='flex '><AiOutlineMail className='mt-1.5 mr-2'/><span>{selectedRequest.tutorEmail}</span></h1>
                <h1 className='flex '><BsTelephone className='mt-1.5 mr-2'/><span>{selectedRequest.phone}</span></h1>
              </div>
              <div className='flex space-x-2 mt-4 '>
                <button className='text-white bg-[#7c62c4] rounded hover:bg-[#7644FF] transition-colors duration-300 px-4 py-2  '>UnArchieved</button>
                <button className='text-[#7644FF] border rounded px-4 py-2 border-[#7644FF]  '>Delete</button>
              </div>
            </div>
            <div className='w-3/4 '>
              <div className="flex justify-around mb-2">
                <button className={`px-3 py-3 w-full ${selectedDetail === 'Qualification' ? 'bg-[#7644FF]' : 'bg-gray-300'}`} onClick={() => handleDetailClick('Qualification')}>Qualification</button>
                <button className={`px-3 py-3 w-full ${selectedDetail === 'Experience' ? 'bg-[#7644FF]' : 'bg-gray-300'}`} onClick={() => handleDetailClick('Experience')}>Experience</button>
                <button className={`px-3 py-3 w-full ${selectedDetail === 'Expertise' ? 'bg-[#7644FF]' : 'bg-gray-300'}`} onClick={() => handleDetailClick('Expertise')}>Expertise</button>
                <button className={`px-3 py-3 w-full ${selectedDetail === 'Availability' ? 'bg-[#7644FF]' : 'bg-gray-300'}`} onClick={() => handleDetailClick('Availability')}>Availability</button>
                <button className={`px-3 py-3 w-full ${selectedDetail === 'Subject' ? 'bg-[#7644FF]' : 'bg-gray-300'}`} onClick={() => handleDetailClick('Subject')}>Subject</button>
              </div>
              {selectedDetail && (
                <div className="text-gray-600">
                  
                  
                  {selectedDetail === 'Qualification' && <>
                  <div className='p-4'>
                  <h3 className=" mb-4 ">{selectedRequest.tutorName}</h3>
                  <h1 className='flex text-[#7644FF] mb-4 font-bold space-x-1'><span><BsFileText className='text-xl '/></span><span>{selectedRequest.Degree}</span></h1>
                  <h1 className='text-xs mb-1 text-gray-500 '>Duration : {selectedRequest.duration}</h1>
                  <h1 className='text-xs mb-4 text-gray-500 '>Grade/CGPA : {selectedRequest.cgpa}</h1>
              <img src={selectedRequest.tutorImageUrl} alt='img ' className='h-20 w-20 rounded-full' />
                 <h1 className='mt-2 text-lg '>Certificate</h1>
                 <h1 className='flex text-[#7644FF] mb-4 font-bold space-x-1'><span><BsFileText className='text-xl '/></span><span>{selectedRequest.Degree}</span></h1>

                 <h1 className='text-xs mb-1 text-gray-500 '>Duration : {selectedRequest.duration}</h1>
                  <h1 className='text-xs mb-4 text-gray-500 '>Grade/CGPA : {selectedRequest.cgpa}</h1>
                  <h1 className='text-xs mb-4 text-gray-500 '>{selectedRequest.objective}</h1>
                  </div>

                  </>}
                  {selectedDetail === 'Experience' && <>
                  <h1>{selectedDetail}</h1>
                  <div className='p-4'> 
                  <h1 className='flex text-[#7644FF] mb-4 font-bold space-x-1'><span><BsFileText className='text-xl '/></span><span>{selectedRequest.Degree}</span></h1>

<h1 className='text-xs mb-1 text-gray-500 '>Duration : {selectedRequest.duration}</h1>
 <h1 className='text-xs mb-4 text-gray-500 '>Grade/CGPA : {selectedRequest.cgpa}</h1>
 <h1 className='text-xs mb-4 text-gray-500 '>{selectedRequest.objective}</h1>
 <img src={selectedRequest.tutorImageUrl} alt='img ' className='h-20 w-20 rounded-full' />

                  </div>

                  

                  </>}
                  {selectedDetail === 'Expertise' && <>
                  <h1>{selectedDetail}</h1>
                  <div className='p-4'> 
                  <h1 className='flex text-[#7644FF] mb-4 font-bold space-x-1'><span><BsFileText className='text-xl '/></span><span>{selectedRequest.Degree}</span></h1>

<h1 className='text-xs mb-1 text-gray-500 '>Duration : {selectedRequest.duration}</h1>
 <h1 className='text-xs mb-4 text-gray-500 '>Grade/CGPA : {selectedRequest.cgpa}</h1>
 <h1 className='text-xs mb-4 text-gray-500 '>{selectedRequest.objective}</h1>
 <img src={selectedRequest.tutorImageUrl} alt='img ' className='h-20 w-20 rounded-full' />

                  </div>

                  </>}
                  {selectedDetail === 'Availability' && <>
                  <h1>{selectedDetail}</h1>
                  <h3 className="text-xl  pl-10 my-2">Time Zone: <span className='text-[#7644FF]'>{selectedRequest.timeZone}</span></h3>

                  

                  </>}
                  {selectedDetail === 'Subject' && <>
                  <h1>{selectedDetail}</h1>
                  <div className='p-4'>
                    <h1 className='mb-6'>Subject Teaching</h1>
                    <h1 className='flex  mb-4  space-x-1'><span><BsFileText className='text-xl text-[#7644FF] '/></span><span>{selectedRequest.subject}</span></h1>
                    <div className='flex flex-col'>
  <div className='w-1/2 flex items-center'>
    <span className='w-36'>Grade:</span>
    <span>{selectedRequest.grade}</span>
  </div>
  <div className='w-1/2 flex items-center'>
    <span className='w-36'>Current Students Enrolled:</span>
    <span>{selectedRequest.currentStudent}</span>
  </div>
  <div className='w-1/2 flex items-center'>
    <span className='w-36'>Previous Student:</span>
    <span>{selectedRequest.previousStudent}</span>
  </div>
  <div className='w-1/2 flex items-center'>
    <span className='w-36'>Total Earnings:</span>
    <span>{selectedRequest.totalEarning}</span>
  </div>
</div>


                  </div>

                  </>}
                </div>
              )}
            </div>
          </>
        ) : (
          <p>Select a request to view details.</p>
        )}
      </div>
    </div>
  );
};

export default TutorRequests;
