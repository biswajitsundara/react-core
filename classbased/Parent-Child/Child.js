import React from "react";

class Child extends React.Component{
    constructor(){
        super();
        console.log('Constructor Called From Child');
    }

    render(){
        console.log('Render Called From Child')
        return <h1>Child</h1>
    }
}

export default Child