import React from 'react';
import './CodingLang.css'

const CodingLang = ({ img, lang }) => {
    return (
        <div className='coding-badge'>
            <img src={img} alt="" />
            <h5 className='code-lang'>{lang}</h5>
        </div>
    );
}

export default CodingLang;
