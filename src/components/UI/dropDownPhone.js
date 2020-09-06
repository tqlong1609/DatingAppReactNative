import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PhoneInput from 'react-native-phone-input';
import ModalPickerImage from './ModalPickerImage';

export default class DropDownPhone extends React.Component {
    constructor(props) {
        super(props);

        this.onPressFlag = this.onPressFlag.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
    }


    onPressFlag = () => {
        this.myCountryPicker.open();
    }

    selectCountry(country) {
        this.phone.selectCountry(country.iso2);
    }

    render() {
        const { style } = this.props;

        return (
            <View style={{ ...style }}>
                <PhoneInput
                    ref={(ref) => {
                        this.phone = ref;
                    }}
                    onPressFlag={this.onPressFlag}
                />

                <ModalPickerImage
                    ref={(ref) => {
                        this.myCountryPicker = ref;
                    }}
                    // data={this.state.pickerData}
                    onChange={(country) => {
                        this.selectCountry(country);
                    }}
                    cancelText="Cancel"
                />
            </View >
        );
    }
}

let styles = StyleSheet.create({
});
