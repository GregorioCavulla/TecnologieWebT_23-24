'use strict';

class App extends React.Component {
  constructor(){
        super();
        this.state = {
        result: "",
        input: ""
        }
        this.onClick = this.onClick.bind(this); 
  }

  onClick(e) {
        let button = e.target.name
        if(button === "="){

            this.calculate()
        }

      else if(button === "C"){
          this.reset()
      }
      else if(button === "CE"){
          this.backspace()
      }

      else {
          this.setState({
            input: this.state.input + button
          })
      }
  };


  calculate() {
        try {
              this.setState({
              result: (eval(this.state.input) || "" ) + ""
            })
        } catch (e) {
            this.setState({
            result: "error"
        })

        }
  };

  reset(){
      this.setState({
          result: "",
          input: ""
      })
        };


  backspace(){
      this.setState({
          input: this.state.input.slice(0, -1)
      })
  };

  render() {
      return (

        <div className="calculator-body">
            <h1>Calcolatrice</h1>
            <Display result={this.state.input}/>
            <Display result={this.state.result}/>
            <KeyBoard onClick={this.onClick}/>
        </div>

      );
  }
}
