import React from 'react';
import './mywork.css'
import soonImg from '../../images/soon.svg'



// function GoBackWithRefresh(event) {
//     if ('referrer' in document) {
//         window.location = document.referrer;
//         /* OR */
//         //location.replace(document.referrer);
//     } else {
//         window.history.back();
//     }
// }


export default function Work() {
    return(

        <>
    <div className='soon'>
        <img className='soon-img' src={soonImg} />
        <h1 className='soon-h1'>COMING SOON..</h1>
        <p className='soon-p'>We are currently developing this page, which will be available very soon.</p>
        <button className='soon-btn'><a href="/" onclick="GoBackWithRefresh();return false;">GO BACK</a></button>
    </div>
        </>

    )
}