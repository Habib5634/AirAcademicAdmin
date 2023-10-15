import React, { useState } from 'react'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import data from './DeletedStudentData'


const DeletedStudent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(5);
    const [pagesToShow] = useState(5);
    

    const totalPosts = data.length;
    const totalPageNumbers = Math.ceil(totalPosts / postPerPage);

   

    let startPage, endPage;
    if (totalPageNumbers <= pagesToShow) {
        startPage = 1;
        endPage = totalPageNumbers;
    } else {
        const halfPagesToShow = Math.floor(pagesToShow / 2);
        if (currentPage <= halfPagesToShow) {
            startPage = 1;
            endPage = pagesToShow;
        } else if (currentPage + halfPagesToShow >= totalPageNumbers) {
            startPage = totalPageNumbers - pagesToShow + 1;
            endPage = totalPageNumbers;
        } else {
            startPage = currentPage - halfPagesToShow;
            endPage = currentPage + halfPagesToShow;
        }
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);
    
  return (
    <>
    <h1 className='text-2xl mb-1 ml-2'>Deleted Students</h1>
    <div className="overflow-x-auto border border-gray-300 rounded-xl">
      <table className="min-w-full bg-white ">
        <thead>
          <tr className='text-gray-500'>
          <th className="py-2 px-4 text-start border-b">S.No</th>

            <th className="py-2 px-2 text-start border-b">Student</th>
            <th className="py-2 px-4 text-start border-b">Date</th>
            <th className="py-2 px-4 text-start border-b">Reason</th>
            
          
          </tr>
        </thead>
        <tbody>
          {currentPost.map((item, index) => (
            <tr key={item.id} className='hover:bg-slate-100'>
              <td className="py-1.5 text-gray-500 px-4 text-sm"></td>

              <td className="py-1.5 text-gray-500 px-2 text-sm flex items-center "><img src={item.imgUrl} alt='profile' className='w-10 h-10 mr-2 rounded-full'/>{item.student}</td>
              <td className="py-1.5 text-gray-500 px-4 text-sm"></td>
              <td className="py-1.5 text-gray-500 px-4 text-sm"></td>
              
              
              
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="flex justify-center mt-4">
                {currentPage > 1 && (
                    <button onClick={() => handlePageClick(currentPage - 1)} className="mx-2  text-[#7644FF] font-medium  rounded">
                        <AiOutlineLeft className='border text-2xl p-1'/>
                    </button>
                )}
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        onClick={() => handlePageClick(number)}
                        className={`mx-2  text-[#7644FF] font-medium py-1 border px-2.5 rounded ${currentPage === number ? 'text-white bg-[#7644FF]' : ''}`}
                    >
                        {number}
                    </button>
                ))}
                {currentPage < totalPageNumbers && (
                    <button onClick={() => handlePageClick(currentPage + 1)} className="mx-2 font-medium  first-letter: text-[#7644FF]  rounded">
                        <AiOutlineRight className='border text-2xl p-1'/>
                    </button>
                )}
            </div>
    </>
  )
}

export default DeletedStudent