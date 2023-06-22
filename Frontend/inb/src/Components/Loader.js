import React from 'react';

const Loader = () => {
    return (
        <div style ={{position: "fixed", zIndex: 2,display:"flex",justifyItems:"center"}}>
            <div class="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;
