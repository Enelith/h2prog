import React from 'react';
import imgErreur404 from '../../../asset/images/error404.png';

const erreur404 = (props) => (
    <div className="text-center">
        <img src={imgErreur404}
            alt='erreur404'
            style={{ 'maxWidth' : '-webkit-fill-available' }}
        />
        <div>La page demand&eacute;e n'existe pas</div>
    </div>
);

export default erreur404;
