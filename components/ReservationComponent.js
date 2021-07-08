import React, { Component } from 'react';
// FIX 1, PART 1: Best practices would dictate to combine all of your import from the same library into a single import.
// I noticed you have imported the Alert component from 'react-native' library down on line 15. I'll just include
// it in the import below and comment out the import on line 15.
// OLD CODE: 
/*
import { Text, View, ScrollView, StyleSheet,
    Picker, Switch, Button } from 'react-native';
*/
import { Text, View, ScrollView, StyleSheet,
    Picker, Switch, Button, Alert } from 'react-native';
// END FIX 1
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Animatable from 'react-native-animatable';
// import { Alert } from 'react-native';

class Reservation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            campers: 1,
            hikeIn: false,
            date: new Date(),
            showCalendar: false,

        };
    }

    static navigationOptions = {
        title: 'Reserve Campsite'
    }

    handleReservation() {
        console.log(JSON.stringify(this.state));
        // FIX 2, PART 1: The assignment asked yout o remove all modal code...
        /* this.toggleModal(); */
        // END FIX 2, PART 1

        // FIX 3, PART 1: This is a better place for the alert code. You placed your alert code
        // inside the "onPress" event for your submit button. First off, this applies the styles of the
        // button to the alert box which may not be something you want from a UI perspective. Second, in the case
        // another component would need to display the same alert, having the code inside this method will make it
        // appropriately available. I will move your code...
        Alert.alert(
            'Begin Search?',
            'Number of Campers: ' + this.state.campers + '\n' + 'Hike-In? ' + this.state.hikeIn + '\n' + 'Date: ' + this.state.date,
            [
                {
                    text: 'Cancel',
                    onPress: () => this.resetForm(),
                    style: 'cancel'
                  },
                  {
                    text: 'OK',
                    onPress: () => this.resetForm()
                  }
            ],
        )
        // END FIX 3, PART 1
    }

    resetForm() {
        this.setState({
            campers: 1,
            hikeIn: false,
            date: new Date(),
            showCalendar: false,
        });
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View
                    animation='zoomIn'
                    duration={2000}
                    delay={1000}
                >
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Number of Campers</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.campers}
                        onValueChange={itemValue => this.setState({campers: itemValue})}
                    >
                        <Picker.Item label='1' value='1' />
                        <Picker.Item label='2' value='2' />
                        <Picker.Item label='3' value='3' />
                        <Picker.Item label='4' value='4' />
                        <Picker.Item label='5' value='5' />
                        <Picker.Item label='6' value='6' />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Hike-In?</Text>
                    <Switch
                        style={styles.formItem}
                        value={this.state.hikeIn}
                        trackColor={{true: '#5637DD', false: null}}
                        onValueChange={value => this.setState({hikeIn: value})}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Date</Text>
                    <Button
                        onPress={() =>
                            this.setState({showCalendar: !this.state.showCalendar})
                        }
                        title={this.state.date.toLocaleDateString('en-US')}
                        color='#5637DD'
                        accessibilityLabel='Tap me to select a reservation date'
                    />
                </View>
                {this.state.showCalendar && (
                    <DateTimePicker
                        value={this.state.date}
                        mode={'date'}
                        display='default'
                        onChange={(event, selectedDate) => {
                            selectedDate && this.setState({date: selectedDate, showCalendar: false});
                        }}
                        style={styles.formItem}
                    />
                )}
                <View style={styles.formRow}>
                    <Button
                        onPress={() => 
                            // FIX 3, PART 2: Sionce we moved the code back into the handleReservation method,
                            // we can once again add the call to that method and lose the alert code here...
                            /*
                            Alert.alert(
                                'Begin Search?',
                                'Number of Campers: ' + this.state.campers + '\n' + 'Hike-In? ' + this.state.hikeIn + '\n' + 'Date: ' + this.state.date,
                                [
                                    {
                                        text: 'Cancel',
                                        onPress: () => this.resetForm(),
                                        style: 'cancel'
                                    },
                                    {
                                        text: 'OK',
                                        onPress: () => this.resetForm()
                                    }
                                ],
                            )
                            */
                            this.handleReservation()
                            // END FIX 3, PART 2
                        }
                        title='Search'
                        color='#5637DD'
                        accessibilityLabel='Tap me to search for available campsites to reserve'
                    />
                </View>
            </Animatable.View>
                 
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    // FIX 2, PART 2: Removing the modal code includes these styles
    /*
    modal: { 
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#5637DD',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
    */
    // END FIX 2, PART 2
});

export default Reservation;
