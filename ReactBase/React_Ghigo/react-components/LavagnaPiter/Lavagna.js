'use strict';

class Lavagna extends React.Component {

    render() {
    return (
        <div className="lavagna">
            {this.props.lavagna_records.map((el, index) => 
                <p key={`lavagna_el_${index}`}>{el}</p>
            )}
            <button onClick={this.props.cancella}> Reset </button>
        </div>
        );
    }
}