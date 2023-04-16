import React from 'react';
import './PageOne.css'


function PageOne() {
  return (
    <div className='container ms-auto pageoner'>
      <div className='row'>
        <div className='col-sm-6 align-self-center '>
          <p id='head' className='fs-1'>Landing page for 
          your online service</p>
          <p id='subtext' className='fs-4'>Sed ea enim et expedita quo. 
            Sint consequuntur 
            nobis expedita mollitia 
            voluptatem aut est a quia.</p>
        </div>
        <div className='col-sm-6 text-center '>
          <img src='./props.svg' id='prop' ></img>
        </div>
      </div>
    </div>
  );
}

export default PageOne;
