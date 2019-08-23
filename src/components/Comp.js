import React from 'react';

import Crip from './Crip'
import Descrip from './Descrip'

class Comp extends React.Component{
    renderList = () => {
        
        if(this.props.divNumber == null){
            return(
                <div> Nulo </div>
            );
        }
        if(this.props.divNumber === '1'){
            return(
                <div> <Crip sinal = '+'/> </div>
            );
        } else if(this.props.divNumber === '2') {
            return(
                <div><Descrip/> </div>
            );
        } else {
            return(
                <div> Invalida </div>
            );
        }
    }

    render() {
        
        return(
            <div>                
               {this.renderList()}
            </div>
        );
    }
}

export default Comp;