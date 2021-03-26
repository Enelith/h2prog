import React from 'react';

const horaire = (props) => {
    let content = props.horaires.map((horaire, index) => {
        return <li key={index}>Du {horaire.du} au {horaire.au}, de {horaire.heures[0].de} &agrave; {horaire.heures[0].a}</li>
    });

    return (
        <>
            <ul>
                {content}
            </ul>
        </>
    );
};

export default horaire;
