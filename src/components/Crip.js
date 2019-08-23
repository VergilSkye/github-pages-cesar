import React from 'react';

class Crip extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          text: `          
O poeta e um fingidor.
Finge tao completamente
Que chega a fingir que e dor
A dor que deveras sente.

E os que leem o que escreve,
Na dor lida sentem bem,
Nao as duas que ele teve,
Mas so a que eles nao tem.

E assim nas calhas da roda
Gira, a entreter a razao,
Esse comboio de corda
Que se chama o coracao.
          `,
          numberShift: 0,  
          sinal: props.sinal           
        };
      }   

    convert() {
        function mod(n, m) {                    
            return ((n % m) + m) % m;
          
        }
        const cesarCifra = (texto, numero, sinal) => {
        numero = parseInt(numero);
        if (!texto) texto = ' ';
          // caso o numero seja negativo
          if (numero < 0)
            numero = mod(numero, 26);
          if(numero>26){
            numero = mod(numero,26);
          }
        
        var saida = '';
        for (var i = 0; i < texto.length; i ++) {
    
          var c = texto[i];
         
    
          // Se for uma letra
          if (c.match(/[a-z]/i)) {    
            // Get its code
            var code = parseInt(c.charCodeAt(0)); 
            if(sinal === '+') {
                 // Uppercase letters
                if ((code >= 65) && (code <= 90)){
                    c = String.fromCharCode(mod((code-65 + numero), 26) + 65);              
        
                }
                  
                // Lowercase letters
                else if ((code >= 97) && (code <= 122)){               
                    c = String.fromCharCode(mod((code-97 + numero), 26) + 97);
                }     
            } else if(sinal === '-') {
                 // Uppercase letters
                if ((code >= 65) && (code <= 90)){
                    c = String.fromCharCode(mod((code-65 - numero), 26) + 65);              
        
                }
                  
                // Lowercase letters
                else if ((code >= 97) && (code <= 122)){               
                    c = String.fromCharCode(mod((code-97 - numero), 26) + 97);
                } else {
                     // Uppercase letters
                    if ((code >= 65) && (code <= 90)){
                        c = String.fromCharCode(mod((code-65 + numero), 26) + 65);              
            
                    }
                      
                    // Lowercase letters
                    else if ((code >= 97) && (code <= 122)){               
                        c = String.fromCharCode(mod((code-97 + numero), 26) + 97);
                    }  
                }
            }        
            
            
                   
    
          }
         
          // adiciona a saida
          saida += c;
        }
        // All done!
        return saida;
        };
        
        return cesarCifra(this.state.text, this.state.numberShift, this.state.sinal);
    }
    handleChangeText(event) {
        this.setState({
          text: event.target.value
        });        
    }
    handleChangeNumber(event) {
        this.setState({
          numberShift: event.target.value
        });
    }
    

    renderContent = () => {
        return(
        <div className="ui padded segment">
            <div >
                <div className="ui form">
                    <div className="field">
                        <label htmlFor="example-number-input">Chave</label>
                        <input 
                                type="number"  id="example-number-input" 
                                value={this.state.numberShift} onChange={this.handleChangeNumber.bind(this)}
                        />                      
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            
            
                <div className='ui form'>
                    <div className="two fields">
                        <div className="field">
                            <label htmlFor="exampleFormControlTextarea1">Coloque o texto aqui</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" 
                             rows="20"
                            value={this.state.text}
                            onChange={this.handleChangeText.bind(this)}></textarea>
                            
                        </div>
                        <div className="field">
                            <label htmlFor="exampleFormControlTextarea1">Saida</label>
                            <textarea  className="form-control bg-white" id="exampleFormControlTextarea1" 
                             rows="20" 
                            value={this.convert()} readOnly ></textarea>
                        </div>
                   
                    </div>               
                
                          
                </div>
            
        </div>

        );
    }


    render(){
        return(<div>{this.renderContent()}</div>)
    }
}
export default Crip;