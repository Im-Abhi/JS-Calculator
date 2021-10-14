import React from 'react';

export default function Display({ input }){
    return (
        <h1 className="display" id="display">
            {input}
        </h1>
    )
}