import React from 'react';

const arme = (props) => {

    return (
        <>
            <img src={props.imageArme} alt='' />
            <p className="text-center">{props.children}</p>
        </>
    );
};

export default arme;
