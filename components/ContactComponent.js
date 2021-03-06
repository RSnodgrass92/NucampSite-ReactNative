import React, {Component} from "react"
import {ScrollView} from "react-native"


class Contact extends Component

{
    constructor(props)
    {
        super(props)
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

    render(){

        return(
           <ScrollView></ScrollView>
        )
    }

}

export default Contact;