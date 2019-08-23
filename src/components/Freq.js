import React from 'react'

class Freq extends React.Component {
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
          sinal: props.sinal,
          num: 2           
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
        this.funcaoTentativas()
        return cesarCifra(this.state.text, tentativas, this.state.sinal);
    }

      // Funcao para descobrir letra de maior frequencia
      funcaoTentativas(tentativas){
        const funcaoFreq= () =>{
          let text = this.state.text.toLowerCase();
          let mapLetterAndFreq= new Map();
          for(let i =0; i<26; i++ ){
            mapLetterAndFreq.set(String.fromCharCode(i+97), 0)      
          }
  
          let l;
          for(let i=0; i<text.length;i++){           
            l = text[i];        
            if(l.match(/[a-zA-Z]/i)){        
              let temp = mapLetterAndFreq.get(l)        
              temp++;        
              mapLetterAndFreq.set(l,temp); 
            }
          }
         
          var mapAsc = new Map([...mapLetterAndFreq].sort((a,b)=>a[1]===b[1]?0 : a[1]>b[1]?-1:1));   
          let aux =  Array.from([...mapAsc.keys()]);
          console.log(aux) ;    
          return aux;
              
        }
        // InGLES / PORTUGUES
        // T: 116 aparece  	16.671% 
        // A: 97 aparece  	11.602% 
        // S: 115 aparece  	07.755% %      
        
        // PORTUGUES
        // A: 97 aparece  	14.63% 
        // E: 101 aparece  	12.57% 
        // O: 111 aparece  	10.73 %   
        const array = funcaoFreq();
        return array.map((e, index) => {
            let caract = e.charCodeAt();
            if(index < tentativas){

          
              let lowerCaseT    = this.convert(parseInt(caract)- 97 );
              let lowerCaseA    = this.convert(parseInt(caract) - 101);
              let lowerCaseS    = this.convert(parseInt(caract) - 111); 
              return (
                <div className="ui message">
                    <div className="item" key={index + 'T'}>{index}-T : {lowerCaseT}</div>
                    <hr/>
                    <br/>
                    <div className="item" key={index + 'A'}>{index}-A : {lowerCaseA}</div>
                    <hr/>
                    <br/>
                    <div className="item" key={index + 'S'}>{index}-S : {lowerCaseS}</div>
                    <hr/>
                    <br/>
                </div>                
            )             
            }
            return null
        })
        
      }
    
     
    handleChangeText(event) {
        this.setState({
          text: event.target.value.toLowerCase()
        });        
    }
    handleChangeNumber(event) {
      this.setState({
        num: event.target.value
      });
  }
    
    
    render(){
        var divStyle = {
            wordWrap: 'break-word',
            flex: 'inherit'
          };
        return (
            <div>
                <h1>Frequencia</h1>
                <p>Iremos encontrar as letras que mais aparecem no texto</p>
                <p>chutaremos que essas letras são umas das 3 letras que mais aparecem no alfabeto</p>                
                <div >
                  <div className="ui form">
                      <div className="field">
                          <label htmlFor="example-number-input">Tentativas</label>
                          <input 
                                  type="number"  id="example-number-input" 
                                  value={this.state.num} onChange={this.handleChangeNumber.bind(this)}
                          />                      
                      </div>
                  </div>
                </div>
                
                <div className='ui form'>
                      
                        <div className="field">
                            <label htmlFor="exampleFormControlTextarea1">Coloque o texto aqui</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" 
                             rows="10"
                            value={this.state.text}
                            onChange={this.handleChangeText.bind(this)}></textarea>                            
                        </div>   
                  </div>                            
                
                <div className="ui list">
                    <div style={divStyle}
                         className="ui divided items    ">                            
                             {this.funcaoTentativas(this.state.num)}
                             
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Freq;