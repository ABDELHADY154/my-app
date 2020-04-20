import React ,{Component, Fragment} from "react";



export class PersonalInfo extends Component{
    render(){
        return( 
            <Fragment>
                <h1>Hi my name is {this.props.name}. </h1>
                <h2>I am {this.props.age}years old. </h2>
                <h3>{this.props.about}</h3>
            </Fragment>
            
            );
    }
}