import React from 'react';

const agePersonne = (props) => {
    // JavaScript standard
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    // Ligne JSX
    return (
        <>
            <div>Age : {props.age} - (ann&eacute;e de naissance : {currentYear - props.age}) (via Composant agePersonne ~ function)</div>
        </>
    );
}

export default agePersonne;