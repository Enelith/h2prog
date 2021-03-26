import React from 'react';

const titreH1 = (props) => {
    const myCss = `border border-dark bg-primary p-2 m-2 rounded text-white text-center`;

    return (
        <h1 className={myCss}>{props.children}</h1>
    );
};

export default titreH1;
