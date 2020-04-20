import React ,{Component, Fragment} from "react";



export class ContactInfo extends Component{
    render(){
        return( 
            <Fragment>
                <h2>Contacts: </h2>
                <h3>E-MAIL: <a href="mailto:mohamedabdelhady88@gmail.com">{this.props.email}</a> </h3>
                <h3>Phone number: <a href="tel:+201000015894">{this.props.phone}</a></h3>
                <h3>facebook: <a href="https://www.facebook.com/M.abdelhady154">{this.props.facebook}</a> </h3>

            </Fragment>
            );
    }
}





