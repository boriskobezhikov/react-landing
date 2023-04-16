import React from 'react';
import './PageThree.css'
import FeaturesCard from './FeaturesCard/FeaturesCard';
import { Animator, FadeIn, FadeOut, MoveOut, ScrollPage, ZoomIn, batch } from 'react-scroll-motion';

function PageThree() {
  return (
    <>
    <div className='container featcon'>
    <div className='row text-center'>
          <p className='fs-1' id="feathead">Our service features</p>
          <p className='fs-4 mb-5'>
              Aliquid officiis cumque sunt sint.
              Et quo culpa. Enim sed natus molestiae fugiat cum consequatur quia sunt.</p>
      </div>
    <div className='container justify-content-center'>
    <div className='row mt-5'>
        <div className='col-sm'>
            <FeaturesCard/>
        </div>
        <div className='col-sm'>
            <FeaturesCard/>
        </div>
        <div className='col-sm'>
            <FeaturesCard/>
        </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default PageThree;
