import React from "react";
import Child from './Child';

class Parent extends React.Component{
    constructor(){
        super();
        console.log('Constructor Called From Parent');
    }

    render(){
        console.log('Render Called From Parent')
        return <Child />
    }
}

export default Parent