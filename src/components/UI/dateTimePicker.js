import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes'
export default function dateTimePicker(props) {
    const { modeShow } = props;
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimePicker = () => {
        showMode('time');
    };
    return (
        <View>
            <TouchableOpacity
                style={styles.btnDateTime}
                onPress={modeShow === 'date' ? showDatepicker : showTimePicker}
            >
                <Text>12/10/2020</Text>
                {
                    modeShow === 'date' ?
                        <Icon name="calendar-outline" />
                        :
                        <Icon name="time-outline" />
                }
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    )
}
dateTimePicker.propTypes = {
    modeShow: PropTypes.oneOf(['time', 'date']).isRequired,
}
const styles = StyleSheet.create({
    btnDateTime: {
        flexDirection: 'row',
        marginHorizontal: 20,
        backgroundColor: 'red',
        paddingVertical: 17
    }
})
