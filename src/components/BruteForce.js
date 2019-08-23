import React from 'react'

class BruteForce extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: '', 
          sinal: props.sinal           
        };
      } 
      convert(tentativas) {
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
            if(sinal == '+') {
                 // Uppercase letters
                if ((code >= 65) && (code <= 90)){
                    c = String.fromCharCode(mod((code-65 + numero), 26) + 65);              
        
                }
                  
                // Lowercase letters
                else if ((code >= 97) && (code <= 122)){               
                    c = String.fromCharCode(mod((code-97 + numero), 26) + 97);
                }     
            } else if(sinal == '-') {
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
        return cesarCifra(this.state.text, tentativas, this.state.sinal);
    }
    handleChangeText(event) {
        this.setState({
          text: event.target.value
        });        
    }
    renderResponse=()=>{
        let p= [];
        for(let i=0; i<26; i++){
            let aux = this.convert(i);
            p.push(aux);
        }
        return p.map((text,index)=> {
            let temp=index;
            if(index<10)
                index = '0'+index
            return (
                <div>
                    <div className="item" key={temp}>{index} : {text}</div>
                    <hr/>
                    <br/>
                </div>
                
            )
        });
    }
    
    render(){
        var divStyle = {
            wordWrap: 'break-word',
            flex: 'inherit'
          };
        return (
            <div>
                <h1>BruteForce</h1>
                <div className='ui form'>                   
                        <div className="field">
                            <label htmlFor="exampleFormControlTextarea1">Coloque o texto aqui</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" 
                             rows="3"
                            placeholder={this.state.text}
                            onChange={this.handleChangeText.bind(this)}></textarea>                            
                        </div>                          
                </div>
                <div className="ui list">
                    <div style={divStyle}
                         className="ui divided items    ">                            
                             {this.renderResponse()}
                             
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default BruteForce;