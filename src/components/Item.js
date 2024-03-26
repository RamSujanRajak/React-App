import React, {useState} from 'react';

import './item.css'
function Item(props){
    const [title, setTitle] = useState(props.name)

    // let ItemName = props.name

    function clickHandler(){
        setTitle("title change")
        console.log("button click")
    }

    return (
        <div>
            <p className="nirma">
                {title}
                <button onClick={clickHandler} className='button' > click me </button>
            </p>
        {props.children}
        </div>    
    );
}

export default Item;