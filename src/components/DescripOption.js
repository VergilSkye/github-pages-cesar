import React, { PureComponent } from 'react'

import Crip from './Crip'
import BruteForce from './BruteForce'
import Freq from './Freq'

class DescripOption extends React.Component {
    render(){
        if(this.props.divNumber === '1'){
            return<div><Crip sinal='-'/></div>
        } else if (this.props.divNumber === '2'){
            return <BruteForce sinal='-'/>
        } else {
            return <Freq sinal='-'/>
        }
        
    }
}

export default DescripOption;