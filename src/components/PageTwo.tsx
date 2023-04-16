import React, { CSSProperties } from 'react';
import './PageTwo.css'
import { Transform } from 'stream';


function PageTwo() {
  return (
    <div className='container-fluid inc text-white'>
        <div className='container'>
        <div className='row incblock'>
            <div className='col-sm-6 incimg' >
                <img src='./incredible.svg'></img>
            </div>
            <div className='col-sm-6 incart align-self-center'  >
                <p className='fs-3 inchead'>Incredible</p>
                    <p>
                    Consequatur quidem deserunt qui fugit cumque ut esse est dignissimos. 
                    Itaque quia et veritatis. 
                    Qui voluptatem dolor quia exercitationem sed similique. 
                    Incidunt quae suscipit nihil deleniti. 
                    Possimus praesentium sunt aut tempora ut alias.
                    </p>
            </div>
        </div>
        </div>
        <div className='container'>
        <div className='row incblock'>
            <div className='col-sm-6 incimg' >
                <img src='./incredible.svg'></img>
            </div>
            <div className='col-sm-6 incart align-self-center' >
                <p className='fs-3 inchead' >Incredible</p>
                    <p>
                    Consequatur quidem deserunt qui fugit cumque ut esse est dignissimos. 
                    Itaque quia et veritatis. 
                    Qui voluptatem dolor quia exercitationem sed similique. 
                    Incidunt quae suscipit nihil deleniti. 
                    Possimus praesentium sunt aut tempora ut alias.
                    </p>
            </div>
        </div>
        </div>
    </div>
  );
}

export default PageTwo;
