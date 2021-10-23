// import React, { useState } from 'react';

function Header(props) {
    function sendToTitle(e) {
        e.preventDefault();
        props.onReceiv(e.target.inputTitle.value);
    }

    return(
        <div>
            <form onSubmit = {sendToTitle}>
                <input type="text" placeholder="write down your title!" name="inputTitle"></input>
                <input type="submit" value="submit" name="submit"></input>
            </form>
            <div className="title">
        {props.title}
        </div>
        </div>
    );
};




export default Header;