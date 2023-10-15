import React, { useState, useEffect } from 'react';
import { RiMenuLine} from 'react-icons/ri';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Navbar from '../AdminNav/Navbar'
import {FaBars,FaUsers} from 'react-icons/fa'
import {RxDashboard} from 'react-icons/rx'
import {HiUsers} from 'react-icons/hi'
import {AiOutlineRight,AiOutlineDown,AiOutlineWechat,AiOutlineDollarCircle} from 'react-icons/ai'
import {MdOutlineWatchLater} from 'react-icons/md'
import {BiBookContent,BiBell} from 'react-icons/bi'
import TutorRequests from '../../Pages/Tutors/TutorRequests/TutorRequest';
import ApprovedRequest from '../../Pages/Tutors/ApprovedRequest/ApprovedRequest';
import ArchievedTutor from '../../Pages/Tutors/ArchievedTutor/ArchievedTutor';
import TutorVideos from '../../Pages/Tutors/TutorVideos/TutorVideos';
import CurrentStudent from '../../Pages/Student/CurrentStudent/CurrentStudent';
import DeletedStudent from '../../Pages/Student/DeletedStudent/DeletedStudent';
import AllAdmins from '../../Pages/Admins/AllAdmins/AllAdmin';
import AddAdmin from '../../Pages/Admins/AddAdmin/AddAdmin';
import Session from '../../Pages/Session/Session';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);
  const [selectedPage, setSelectedPage] = useState('Dashboard');
  const [tutorDropdown,setTutorDropdown] = useState(false)
  const [studentDropdown, setStudentDropdown] = useState(false)
  const [adminDropdown, setAdminDropdown]  = useState(false)

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsOpen(window.innerWidth > 768);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);


    const handleTutorDropdown = () =>{
  setTutorDropdown(!tutorDropdown)
  
    }
    const handleStudentDropdown = () =>{
      
      setStudentDropdown(!studentDropdown)
        }
    const handleAdminDropdown = () =>{
      
      setAdminDropdown(!adminDropdown)
            }

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleLinkClick = (page) => {
    setSelectedPage(page);
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  let content;

  if (selectedPage === 'Dashboard') {
    content = (
      <Dashboard/>
    );
  } else if (selectedPage === 'tutorRequest') {
    content = (
      <TutorRequests/>
    );
  } else if (selectedPage === 'approvedRequest') {
    content = (
      <ApprovedRequest/>
    );
  }
  else if (selectedPage === 'archivedRequest') {
    content = (
      <ArchievedTutor/>
    );
  }
  else if (selectedPage === 'tutorVideos') {
    content = (
      <TutorVideos/>
    );
  }else if (selectedPage === 'currentStudents') {
    content = (
      <CurrentStudent/>
    );
  }else if (selectedPage === 'deletedStudents') {
    content = (
      <DeletedStudent/>
    );
  }else if (selectedPage === 'allAdmin') {
    content = (
      <AllAdmins/>
    );
  }else if (selectedPage === 'addAdmin') {
    content = (
      <AddAdmin/>
    );
  }else if (selectedPage === 'removeAdmin') {
    content = (
      <div className='p-4'>
        <h1>Remove Admin  </h1>
       
      </div>
    );
  }
  else if (selectedPage === 'Session') {
    content = (
      <Session/>
    );
  }else if (selectedPage === 'chat') {
    content = (
      <div>
        <h1>Chat Page Content</h1>
        <p>Content for Contact page goes here.</p>
      </div>
    );
  }else if (selectedPage === 'content') {
    content = (
      <div>
        <h1>Content Page Content</h1>
        <p>Content for Contact page goes here.</p>
      </div>
    );
  }else if (selectedPage === 'earning') {
    content = (
      <div>
        <h1>earning Page Content</h1>
        <p>Content for Contact page goes here.</p>
      </div>
    );
  }else if (selectedPage === 'notification') {
    content = (
      <div>
        <h1>notification Page Content</h1>
        <p>Content for Contact page goes here.</p>
      </div>
    );
  }

  return (
    <div className={`h-screen flex overflow-hidden`}>
      {isOpen && (
        <div className={`w-1/6 bg-white border-r p-3 border-gray-200 `}>
          <div className=" bg-gray-50 h-full">
            
            <div className="flex items-center  h-12">
            <button 
            // onClick={toggleSidebar} 
            className="md:hidd text-gray-600">
              <FaBars size={20} className='text-[#7644FF] ml-2 mr-6' />
            </button>
              <span className="text-xl font-bold self-center text-[#7644FF]">Air Academic</span>
            </div>
            <ul className="mt-6">
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('Dashboard')}
                  className={`flex items-center py-2 w-full ${selectedPage === 'Dashboard' ? 'text-[#7644FF]  bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className="ml-2 flex text-xl  self-center "><RxDashboard size={20} className='mt-1 mr-6' />Dashboard</span>
                </button>
              </li>
              
              <li className="mb-2">
                <button
                  onClick={handleTutorDropdown}
                  className={`flex items-center py-2 w-full ${tutorDropdown  ? 'text-[#7644FF] bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className="ml-2 flex text-xl   "><FaUsers size={20} className='mt-1 mr-6' />Tutors {tutorDropdown  ? (<AiOutlineDown className='mt-2 text-sm ml-20'/>):(<AiOutlineRight className='mt-2 text-sm ml-20'/>) }</span>
                </button>
              </li>
              {tutorDropdown && (
                <>
 <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('tutorRequest')}
                  className={`flex items-center py-2 w-full ${selectedPage === 'tutorRequest' ? 'text-[#7644FF]  bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className=" flex text-xl  self-center ml-6">Tutor Request</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('approvedRequest')}
                  className={`flex items-center py-2 w-full ${selectedPage === 'approvedRequest' ? 'text-[#7644FF]  bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className=" flex text-xl  self-center ml-6">Approved Request</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('archivedRequest')}
                  className={`flex items-center py-2 w-full ${selectedPage === 'archivedRequest' ? 'text-[#7644FF]  bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className=" flex text-xl  self-center ml-6">Archieved Request</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('tutorVideos')}
                  className={`flex items-center py-2 w-full ${selectedPage === 'tutorVideos' ? 'text-[#7644FF]  bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className=" flex text-xl  self-center ml-6">Tutor Videos</span>
                </button>
              </li>
                
                </>
              )}

<li className="mb-2">
                <button
                  onClick={handleStudentDropdown}
                  className={`flex items-center py-2 w-full ${studentDropdown  ? 'text-[#7644FF] bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className="ml-2 flex text-xl  self-center "><FaUsers size={20} className='mt-1 mr-6' />Students {studentDropdown  ? (<AiOutlineDown className='mt-2 text-sm ml-14'/>):(<AiOutlineRight className='mt-2 text-sm ml-14'/>) }</span>
                </button>
              </li>
              {studentDropdown && (
                <>
 <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('currentStudents')}
                  className={`flex items-center py-2 w-full ${selectedPage === 'currentStudents' ? 'text-[#7644FF]  bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className=" flex text-xl  self-center ml-6">Current Students</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('deletedStudents')}
                  className={`flex items-center py-2 w-full ${selectedPage === 'deletedStudents' ? 'text-[#7644FF]  bg-gray-200' : 'text-gray-400'}`}
                >
                <span className=" flex text-xl  self-center ml-6">Deleted Students</span>
                </button>
              </li>
             
                
                </>
              )}
              <li className="mb-2">
                <button
                  onClick={handleAdminDropdown}
                  className={`flex items-center py-2 w-full ${adminDropdown  ? 'text-[#7644FF] bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className="ml-2 flex text-xl  self-center "><HiUsers size={20} className='mt-1 mr-6' />Admin {adminDropdown  ? (<AiOutlineDown className='mt-2 text-sm  ml-[70px]'/>):(<AiOutlineRight className='mt-2 text-sm ml-[70px] '/>) }</span>
                </button>
              </li>
              {adminDropdown && (
                <>
 <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('allAdmin')}
                  className={`flex items-center py-2 w-full ${selectedPage === 'allAdmin' ? 'text-[#7644FF]  bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className=" flex text-xl  self-center ml-6">All Admin</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('addAdmin')}
                  className={`flex items-center py-2 w-full ${selectedPage === 'addAdmin' ? 'text-[#7644FF]  bg-gray-200' : 'text-gray-400'}`}
                >
                <span className=" flex text-xl  self-center ml-6">Add Admin</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('removeAdmin')}
                  className={`flex items-center py-2 w-full ${selectedPage === 'removeAdmin' ? 'text-[#7644FF]  bg-gray-200' : 'text-gray-400'}`}
                >
                <span className=" flex text-xl  self-center ml-6">Remove Admin</span>
                </button>
              </li>
             
                
                </>
              )}
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('Session')}
                  className={`flex items-center py-2 w-full ${selectedPage === 'Session' ? 'text-[#7644FF]  bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className="ml-2 flex text-xl  self-center "><MdOutlineWatchLater size={20} className='mt-1 mr-6' />Sessions</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('chats')}
                  className={`flex items-center py-2 w-full ${selectedPage === 'chats' ? 'text-[#7644FF]  bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className="ml-2 flex text-xl  self-center "><AiOutlineWechat size={20} className='mt-1 mr-6' />Chats</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('content')}
                  className={`flex items-center py-2 w-full ${selectedPage === 'content' ? 'text-[#7644FF]  bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className="ml-2 flex text-xl  self-center "><BiBookContent size={20} className='mt-1 mr-6' />Content</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('earning')}
                  className={`flex items-center py-2 w-full ${selectedPage === 'earning' ? 'text-[#7644FF]  bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className="ml-2 flex text-xl  self-center "><AiOutlineDollarCircle size={20} className='mt-1 mr-6' />Earning</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('notification')}
                  className={`flex items-center py-2 w-full ${selectedPage === 'notification' ? 'text-[#7644FF]  bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className="ml-2 flex text-xl  self-center "><BiBell size={20} className='mt-1 mr-6' />Notifications</span>
                </button>
              </li>
              
            </ul>
          </div>
        </div>
      )}
      <div className="flex-1 overflow-x-hidden overflow-y-auto p-">
        <Navbar/>
        {content}
      </div>
      {!isOpen && (
        <button 
        // onClick={toggleSidebar}
         className="md:h fixed top-4 left-4 mt-2   bg-transparent p-2 rounded-full">
          <RiMenuLine size={30} />
        </button>
      )}
    </div>
  );
};

export default Sidebar;