"use strict";

class Componente extends React.Component {
  render() {
    let prop = this.props.prop;
    return (
      <div className="...">
        <p>{prop}</p>
      </div>
    );
  }
}
