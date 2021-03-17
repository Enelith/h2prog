import React from 'react';

const arme = (props) => {

    return (
        <>
            <img
                style={{
                    opacity: props.isCurrentArme ? "1" : "0.5",
                    cursor: "pointer"
                }}
                src={props.imageArme}
                alt={props.children}
                onClick={props.clic}
            />
            <p className="text-center">{props.children}</p>
        </>
    );
};

export default arme;
