import React, { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons'
import Themes from '/src/themes'
import moment from "moment";

const DATE = 'DD/MM/YYYY';
const TIME = 'h:mm a';
export default function dateTimePicker(props) {
    const { modeShow, style, styleText } = props;
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const formatDate = (date) => {
        return moment(date).format(DATE);
    }

    const formatTime = (date) => {
        return moment(date).format(TIME);
    }

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
                style={{ ...styles.btnDateTime, ...style }}
                onPress={modeShow === 'date' ? showDatepicker : showTimePicker}
            >
                <Text style={styleText}>{
                    modeShow === 'date' ?
                        formatDate(date)
                        :
                        formatTime(date)}
                </Text>
                {
                    modeShow === 'date' ?
                        <Icon style={styles.icoShow} name="calendar-outline" />
                        :
                        <Icon style={styles.icoShow} name="time-outline" />
                }
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    style={{ backgroundColor: 'red' }}
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
    style: PropTypes.object,
    styleText: PropTypes.object,
}

dateTimePicker.defaultProps = {
    style: null
}

const styles = StyleSheet.create({
    icoShow: {
        fontSize: 20,
        color: Themes.Colors.GRAY_BRIGHT_I
    },
    btnDateTime: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
