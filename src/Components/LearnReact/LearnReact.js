import React from 'react'
import './LearnReact.css'

const LearnReact = () => {
    let customeCss = "code"
    const isLoggedin = true;
    const greeting = isLoggedin ? <p>Welcome back</p> : <p>please log in </p>;
    const items = ["list1", "list2", "list3", "List4"];

    return (
        <div>
            <h1 className='heading'>bannertext</h1>
            <p className='slogan'>Learn more be smrt</p>

            <p className={customeCss} style={{ fontSize: "25px" }}>25+35={25 + 35}</p>

            {/* conditional rendering */}
            {greeting}

            {/* map function */}
            <ul>
                {items.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
            

            
        </div>
    )
}

export default LearnReact
