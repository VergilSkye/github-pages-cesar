import React, { PureComponent } from 'react'

import DescripOption from './DescripOption'
import semanticUiTransition from 'semantic-ui-transition';
import semanticUiDropdown from 'semantic-ui-dropdown';
import $ from 'jquery'

$.fn.transition = semanticUiTransition
$.fn.dropdown = semanticUiDropdown


class Descrip extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = { value: '1'};
        this.dropdown = null
      }
      
      onChange(e) {
        this.setState({
          value: e.target.value
        })
      }
     
      componentDidMount(){          
        $(this.dropdown).dropdown({
            onChange: value => { this.setState({ value }) }
          })
      }
      componentDidUpdate () { $(this.dropdown).dropdown('refresh') }
      
      
      render() {
       
       
        return ( 
            <div >          
                <div className="field">       
                        <p>Metodo de Descriptografar     </p>     
                        <div ref={el => { this.dropdown = el }} className="ui fluid search selection dropdown " id="hit" >
                            <input type="hidden" name={this.props.name}/>
                            <div className="default text">Chave</div>
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <div className='item' data-value='1'>Chave</div>
                                <div className='item' data-value='2'>Força Bruta</div>
                                <div className='item' data-value='3'>Frequencia</div>
                            </div>                            
                        </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>                  
                <DescripOption divNumber={this.state.value} />      
             </div>
             
        )
      }
}

export default Descrip;