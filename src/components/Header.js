import React from "react";
import close from "./images/icon-remove.svg"


const Header = ( {keywords, removeKeywords, clear} ) => {
    return (
        <div className='header-container'>
            <ul>
                {keywords.map((key, id) => {
                    return (
                        <li key={id}>
                            {key}
                            <button className='close' onClick={() => removeKeywords(key)}>
                                <img src={close} alt='' />
                            </button>
                        </li> 
                    ) 
                })}
                
            </ul> 
            <a href="#" onClick={() => clear()}>
                    Clear
                </a>
        </div>
    )
}

export default Header;