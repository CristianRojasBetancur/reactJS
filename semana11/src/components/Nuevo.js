import React, {Component} from 'react'


var personas = ['donchi', 'tomas', 'julian'];
personas.push('valentina');

class Nuevo extends Component {
    render(){
        return(
            <>
            {console.log(personas)}
            </>
        )
    }
}

export default Nuevo