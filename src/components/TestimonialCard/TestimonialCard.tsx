import React from 'react';
import './TestimonialCard.css'

function TestimonialCard() {
  return (
    <div className='testcard container'>
        <div className='row'>
            <div className='col-sm ms-2 mt-4'>
                <img src='./profilepic.png'/>
            </div>
            <div className='col-sm ms-2 mt-4'>
                <p className='nametest'>Aron Lowe</p>
                <p>Schneider Inc</p>
            </div>
        </div>
        <div className='row'>
            <div className='col=sm ms-2 mt-2'>
            <p>
                Itaque est odio et rerum harum molestias aliquam. Ullam et aut velit culpa aut. 
                Perferendis nesciunt non voluptatibus mollitia omnis. Dolorem error inventore. 
                Cupiditate nihil modi quos rerum. Mollitia rerum ipsam facere velit.
            </p>
            </div>
        </div>
    </div>
  );
}

export default TestimonialCard;
