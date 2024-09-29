import React from 'react'
import back_btn from '.../assests/arrow_back.svg'

function page(){

    function back() {
         window.location.href = '../index.tsx'
    }
    
    return(
        <>
        <header>
            <a href='../index.tsx'><img src={back_btn} alt='back_button' onClick={back}></img></a>
            <h1></h1>
        </header>
        <body>
            <div>
                <img src='' alt=''></img>
            </div>
            <div>
                <p>product description and pricings</p>
            </div>
            <div>
                <div>2 pics</div>
                <div>2 pics</div>
            </div>
        </body>
        </>
    )
}

export default page;