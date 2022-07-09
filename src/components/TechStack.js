import React, { useState } from 'react';
//import stacks from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const stacks =[
    {
      id: 1,
      name: 'ReactJS',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png',
      
    },
    {
      id: 2,
      name: 'C#',
      image:
        'https://cdn-icons-png.flaticon.com/512/74/74906.png',
    },
    {
      id: 3,
      name: 'Java Script',
      image:
        'https://cdn.icon-icons.com/icons2/2389/PNG/512/js_logo_icon_145146.png',
     
    },
    {
      id: 4,
      name: 'NodeJs',
      image:
        'https://www.loginradius.com/blog/static/6ee159acf6c294342ec04f86aede5d14/701ee/coverImage.jpg',
    },
  ]

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image} = stacks[index];
  const checkNumber = (number) => {
    if (number > stacks.length - 1) {
      return 0;
    }
    if (number < 0) {
      return stacks.length - 1;
    }
    return number;
  };
  const nextStack = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevStack = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomStack = () => {
    let randomNumber = Math.floor(Math.random() * stacks.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className='review'>
        <div className="card ml-3 m-auto" style={{width: "18rem"}}>
            <img className="card-img-top"  style={{height: "14em"}} src={image} alt="Card image cap"/>
            <div className="card-body"> 
                <h5 className="card-title text-center">{name}</h5>
            </div>
        </div>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevStack}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextStack}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomStack}>
        surprise me
      </button>
    </article>
  );
};

export default Review;