import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
       <button class="btn btn-primary bg-gradient-to-r font-medium text-base  from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500">{children}</button>
    );
};

export default PrimaryBtn;