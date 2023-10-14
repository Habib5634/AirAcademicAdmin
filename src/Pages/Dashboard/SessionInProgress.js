import React, { useState } from 'react'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'


const data = [
    {
      student: '1 - hildegard.org',
      tutors: 'Leanne Graham',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
    },
    {
      student: '2 - anastasia.net',
      tutors: '	Ervin Howell',
      email: 'Shanna@melissa.tv',
      phone: '	010-692-6593 x09125',
    },
    {
        student: '3 - ramiro.info',
        tutors: 'Clementine Bauch',
        email: 'Nathan@yesenia.net',
        phone: '1-463-123-4447',
      },
      {
        student: '4 - kale.biz',
        tutors: 'Patricia Lebsack',
        email: 'Julianne.OConner@kory.org',
        phone: '493-170-9623 x156',
      },
      {
        student: '5 - demarco.info',
        tutors: 'Chelsey Dietrich',
        email: 'Lucio_Hettinger@annie.ca',
        phone: '(254)954-1289',
      },
      {
        student: '6 - ola.org',
        tutors: 'Mrs. Dennis Schulist',
        email: 'Karley_Dach@jasper.info',
        phone: '1-477-935-8478 x6430',
      },
      {
        student: '7 - elvis.io',
        tutors: 'Kurtis Weissnat',
        email: 'Telly.Hoeger@billy.biz',
        phone: '210.067.6132',
      },
      {
        student: '8 - jacynthe.com',
        tutors: 'Nicholas Runolfsdottir V',
        email: 'Sherwood@rosamond.me',
        phone: '586.493.6943 x140',
      },
      {
        student: '9 - conrad.com',
        tutors: 'Glenna Reichert',
        email: 'Chaim_McDermott@dana.io',
        phone: '(775)976-6794 x41206',
      },
      {
        student: '10 - ambrose.net',
        tutors: 'Clementina DuBuque',
        email: 'Rey.Padberg@karina.biz',
        phone: '024-648-3804',
      },
    // Add more data as needed
  ];
const SessionInProgress = () => {
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
    <h1 className='text-2xl mb-1 ml-2'>Session In Progress</h1>
    <div className="overflow-x-auto border border-gray-300 rounded-xl">
      <table className="min-w-full bg-white ">
        <thead>
          <tr className='text-gray-500'>
            <th className="py-2 px-4 text-start border-b">Student</th>
            <th className="py-2 px-4 text-start border-b">Tutors</th>
            <th className="py-2 px-4 text-start border-b">Email</th>
            <th className="py-2 px-4 text-start border-b">Phone No</th>
          </tr>
        </thead>
        <tbody>
          {currentPost.map((item, index) => (
            <tr key={index}>
              <td className="py-2 text-gray-500 px-4 text-sm">{item.student}</td>
              <td className="py-2 text-gray-500 px-4 text-sm">{item.tutors}</td>
              <td className="py-2 text-gray-500 px-4 text-sm">{item.email}</td>
              <td className="py-2 text-gray-500 px-4 text-sm">{item.phone}</td>
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

export default SessionInProgress