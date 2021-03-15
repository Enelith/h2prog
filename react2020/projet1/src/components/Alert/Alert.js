import React from 'react';

const alert = (props) => {
    const myCss = `alert ${props.typeAlert}`;
    return (
        <div className={ myCss } role="alert">
            {props.children}
        </div>
    );
};

export default alert;
