import React from 'react';
import classes from './TitreH1.module.css';

const titreH1 = (props) => {
    const myCss = `border border-dark bg-primary p-2 m-2 rounded text-white text-center ${classes.boogaloo}`;

    return (
        <h1 className={myCss}>{props.children}</h1>
    );
};

export default titreH1;
