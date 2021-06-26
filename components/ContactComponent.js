import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';


class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    };
    
    render() {
        return(
            <ScrollView>
                <Card title = "Contact Information"
                    wrapperStyle={{margin: 20}} >
                    {
                    // FIX 1: LOVE that you used the newline trick for line returns. The assignment
                    // wanted you to have extra space after the address. This can be accomplished 2 ways.
                    // First, you could simply replace "{'\n'}" after "U.S.A." with "{'\n\n'}". Second,
                    // you could add a bottom margin style to the Text component as the assignment asks.
                    // OLD CODE: <Text>1 Nucamp Way {'\n'} Seattle, WA 98001 {'\n'}U.S.A {'\n'}</Text>
                    }
                    <Text style={{marginBottom: 10}}>1 Nucamp Way {'\n'} Seattle, WA 98001 {'\n'}U.S.A {'\n\n'}</Text>
                    {
                    // END FIX 1
                    }
                    <Text>Phone: 1-206-555-1234 {'\n'}Email: campsites@nucamp.co</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;