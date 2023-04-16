import React from 'react';
import './PageFour.css'
import TestimonialCard from './TestimonialCard/TestimonialCard';

function PageFour() {
  return (
    <div className='container-fluid testimonial text-light mt-4'>
          <div className='text-center mb-4 mt-4 wordstest text-light'>
              <p className='fs-1' id='testihead'>Testimonials</p>
              <p className='fs-4' id='testitext'>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                  Quisquam, repellendus numquam.</p>
          </div>
          <div className='container testi '>
              <div className='row'>
                  <div className='col-sm'>
                      <TestimonialCard></TestimonialCard>
                  </div>
                  <div className='col-sm'>
                      <TestimonialCard></TestimonialCard>
                  </div>
                  <div className='col-sm'>
                      <TestimonialCard></TestimonialCard>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default PageFour;
