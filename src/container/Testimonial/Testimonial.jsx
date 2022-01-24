import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import NavigationDots from '../../components/NavigationDots';
import SocialMedia from '../../components/SocialMedia';
import { testimonials } from '../../constants/dummy';
import './Testimonial.scss';

function Testimonial() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="app__container app__padding app__primarybg">
      <SocialMedia />
      <div className="app__testimonial app__flex">

        <div className="app__head-text">
          <h2>Few <span>Feedbacks</span></h2>
        </div>

        <div className="app__testimonial-item">
          <img src={testimonials[currentIndex].imgurl} alt={testimonials[currentIndex].name} />
          <div className="app__testimonial-content">
            <p>{testimonials[currentIndex].feedback}</p>
            <h4>{testimonials[currentIndex].name}</h4>
            <h5>{testimonials[currentIndex].company}</h5>
          </div>
        </div>

        <div className="app__testimonial-btns">
          <div onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
            <HiChevronLeft />
          </div>

          <div onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
            <HiChevronRight />
          </div>
        </div>
      </div>

      <NavigationDots active="testimonials" />
    </div>
  );
}

export default Testimonial;
