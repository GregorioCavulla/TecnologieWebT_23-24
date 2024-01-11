"use strict";

class Text extends React.Component {
  render() {
    let prop = this.props.prop;
    return (
      <div className="...">
        <p>{prop}</p>
      </div>
    );
  }
}
