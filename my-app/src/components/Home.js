import React from 'react';
import './Home.css';
import pic1 from '../assets/piano-royal.jpg';

function Home() {
    return (
        <div className="container">

            <h1>My React App</h1>
            <div className='content-wrapper'>
                <p>
                    This site is an educational one. It is my first app creating with React. It will be filled with all the project I create on React.
                    Please, examine the projects here:
                </p>
                <ul>
                    <li>
                        <a href="/piano">
                            <strong>
                                Piano
                            </strong>
                            <br />
                            <img src={pic1} alt="piano" style={{width: 200}}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}


export default Home;