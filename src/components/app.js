import React ,{Component, Fragment} from "react";
import {PersonalInfo} from "./personalInfo";
import {ContactInfo} from "./contactInfo";

export class App extends Component{

    render(){
        return (
            <Fragment>
                <PersonalInfo
                name = "Mohamed Abdelhady Elshamy"
                age = "22"
                about = "Im a student of Business Information Systems, with GPA 3.8"
                />
                <ContactInfo
                email = "mohamedabdelhady88@gmail.com"
                phone = "+201000015894"
                facebook = "Mohamed Abdelhady Elshamy"
                />
            </Fragment>
        );
      
    }
}




