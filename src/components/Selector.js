import React,{PropTypes} from 'react';
import Comp from './Comp'


import semanticUiTransition from 'semantic-ui-transition';
import semanticUiDropdown from 'semantic-ui-dropdown';
import $ from 'jquery'

$.fn.transition = semanticUiTransition
$.fn.dropdown = semanticUiDropdown

class Selector extends React.Component {
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
                        <div ref={el => { this.dropdown = el }} className="ui fluid search selection dropdown " id="hit" >
                            <input type="hidden" name={this.props.name}/>
                            <div className="default text">Escolha...</div>
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <div className='item' data-value='1'>Criptografar</div>
                                <div className='item' data-value='2'>Descriptografar</div>
                            </div>                            
                        </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>  
                <Comp divNumber = {this.state.value}/>              
             </div>
             
        )
      }
}

export default Selector;
// <Comp divNumber={this.state.value} />