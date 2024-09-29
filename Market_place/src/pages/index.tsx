import React from 'react';
import data from '../Data/data-lotions';
import Card from './body_wash/Card';
import './index.css'
import menu from '../assets/menu.svg'
import Card_2 from './lotions/Card_2';


function open(){
  window.location.href = './product_info/index.tsx'
}

function Index(){

    return(
        <>
        <header>
            <h1>Local</h1>
            <a className='back_btn'><img src={menu} alt='' id='menu' onClick={open}></img></a>
        </header>
        <body>
           { /* <input type='search' placeholder='search'></input> */}
            <div className="App">
              {data.map(item  => (
                <Card {...item} />
              ))}
              </div>
              <div className='App'>
                {data.map(item => (
                    <Card_2 {...item}></Card_2>
                ))}
              </div>
              <div className='App'>
                {data.map(item => (
                    <Card_2 {...item}></Card_2>
                ))}
              </div>
        </body>
        <footer>
            <p>Adverts</p>
        </footer>
        </>
    )
}

export default Index;