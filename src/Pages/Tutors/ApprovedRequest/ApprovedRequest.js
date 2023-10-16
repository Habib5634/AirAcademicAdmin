import React, { useState } from 'react';
import requests from './ApprovedRequestData';

import {HiOutlineLocationMarker} from "react-icons/hi"
import {AiOutlineMail,AiOutlineCheckCircle,AiTwotoneStar } from "react-icons/ai"
import {MdOutlineWatchLater,MdOutlineHourglassTop} from "react-icons/md"
import {BsTelephone,BsFileText,BsGenderAmbiguous} from "react-icons/bs"
import {CgToolbox} from "react-icons/cg"
import {FaPersonWalkingDashedLineArrowRight} from "react-icons/fa6"
const ApprovedRequest = () => {
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
              <div>
                <button className='text-[#7644FF] text-sm mr-2'>Edit</button>
                <button className='text-[#7644FF] text-sm'>Delete</button>
                </div>
                <h1 className='text-xl text-gray-500 mt-3'>{selectedRequest.subject}</h1>
                <h1 className='text-xl '>USD $7/hour</h1>
              <p className='text-sm text-gray-400 mt-4'><span>{selectedRequest.rating}</span>Reviews <span>{selectedRequest.reviews}</span></p>

              <h1 className='mt-3'><span className='text-gray-500'>Skill Level : </span>{selectedRequest.skillLevel}</h1>
             <hr className='border border-gray-900 my-3 w-full'/>
              <div className='self-start space-y-3 text-gray-600 text-lg'>
              <h1 className='flex  text-sm'><HiOutlineLocationMarker className='text-xl mr-1 text-black'/><span>{selectedRequest.location}</span></h1>
                <h1 className='flex  text-sm'><AiOutlineMail className='text-xl mr-1 text-black'/><span>{selectedRequest.tutorEmail}</span></h1>
                <h1 className='flex  text-sm'><BsTelephone className='text-xl mr-1 text-black'/><span>{selectedRequest.phone}</span></h1>
                <h1 className='flex text-sm'><MdOutlineWatchLater className='text-xl mr-1 text-black'/>Time zone: Asia Karachi</h1>
                <h1 className='flex text-sm'><CgToolbox className='text-xl mr-1 text-black'/>Teaching 4 Students now</h1>
                <h1 className='flex text-sm'><AiOutlineCheckCircle className='text-xl mr-1 text-black'/>Verified by Air Academic</h1>
                <h1 className='flex text-sm'><MdOutlineHourglassTop className='text-xl mr-1 text-black'/>Member since 2022</h1>
                <h1 className='flex text-sm'><FaPersonWalkingDashedLineArrowRight className='text-xl mr-1 text-black'/>23</h1>
                <h1 className='flex text-sm'><BsGenderAmbiguous className='text-xl mr-1 text-black'/>Female</h1>
              </div>
              
            </div>
            <div className='w-3/4 '>
              <div className="flex justify-around mb-2">
                <button className={`px-3 py-3 w-full ${selectedDetail === 'Qualification' ? 'bg-[#7644FF]' : 'bg-gray-300'}`} onClick={() => handleDetailClick('Qualification')}>Qualification</button>
                <button className={`px-3 py-3 w-full ${selectedDetail === 'Experience' ? 'bg-[#7644FF]' : 'bg-gray-300'}`} onClick={() => handleDetailClick('Experience')}>Experience</button>
                <button className={`px-3 py-3 w-full ${selectedDetail === 'Expertise' ? 'bg-[#7644FF]' : 'bg-gray-300'}`} onClick={() => handleDetailClick('Expertise')}>Expertise</button>
                <button className={`px-3 py-3 w-full ${selectedDetail === 'Availability' ? 'bg-[#7644FF]' : 'bg-gray-300'}`} onClick={() => handleDetailClick('Availability')}>Availability</button>
                <button className={`px-3 py-3 w-full ${selectedDetail === 'Subject' ? 'bg-[#7644FF]' : 'bg-gray-300'}`} onClick={() => handleDetailClick('Subject')}>Subject</button>
                <button className={`px-3 py-3 w-full ${selectedDetail === 'Payment' ? 'bg-[#7644FF]' : 'bg-gray-300'}`} onClick={() => handleDetailClick('Payment')}>Payment</button>
                <button className={`px-3 py-3 w-full ${selectedDetail === 'Feedback' ? 'bg-[#7644FF]' : 'bg-gray-300'}`} onClick={() => handleDetailClick('Feedback')}>Feedback</button>
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
                  {selectedDetail === 'Payment' && <>
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
                  {selectedDetail === 'Feedback' && <>
                  <div className='p-4'>
                  <h1 className='text-2xl'>Rating & Reviews</h1>
                  <h1 className='my-3 text-black text-lg'>Rating</h1>
                  <div className='h-16 mb-3 w-full bg-gray-200 rounded-md'></div>

                  <h1 className='mb-3 text-black text-lg  '>Reviews</h1>
                  <div className='flex flex-col py-4 mb-3 items-start border pl-4 justify-start'>
                    <span className='flex'>
                      <AiTwotoneStar className='text-yellow-500'/>
                      <AiTwotoneStar className='text-yellow-500'/>
                      <AiTwotoneStar className='text-yellow-500'/>
                      <AiTwotoneStar className='text-yellow-500'/>
                      <AiTwotoneStar className='text-yellow-500'/>
                      
                      </span>
                      <h1>Good Product!</h1>
                  </div>
                  <div className='flex flex-col py-4 mb-3 items-start border pl-4 justify-start'>
                  <span className='flex'>
                      <AiTwotoneStar className='text-yellow-500'/>
                      <AiTwotoneStar className='text-yellow-500'/>
                      <AiTwotoneStar className='text-yellow-500'/>
                      <AiTwotoneStar className='text-yellow-500'/>
                      <AiTwotoneStar className='text-yellow-500'/>
                      
                      </span>
                      <h1>Amazing Quality!</h1>
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

export default ApprovedRequest;
