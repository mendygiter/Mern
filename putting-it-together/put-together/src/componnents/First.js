import {Component} from "react";

class First extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    render() {
        return(
            <>
                <h1>{ this.props.firsName}</h1>
                <h3> {this.state.age}</h3>
                <h3>{this.props.hairColor}</h3>

                <button onClick= { () => {this.setState({age: this.state.age+1})} }>Birthday Button for {this.props.firsName}</button>
            </>
        );
    }
}

export default First