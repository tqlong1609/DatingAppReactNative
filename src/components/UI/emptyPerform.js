import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'
export default function emptyPerform(props) {
    const { title, description, isProspects } = props
    return (
        <View style={styles.container}>
            {
                isProspects ?
                    <Image source={require('/src/assets/images/my_heart.png')}
                        style={styles.image}
                    />
                    :
                    <Image source={require('/src/assets/images/broke.png')}
                        style={styles.image}
                    />}
            <Text style={styles.txtTitle}>{title}</Text>
            <Text
                style={styles.txtDescription}>
                {description}
            </Text>
        </View>
    )
}

emptyPerform.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    isProspects: PropTypes.bool,
}

emptyPerform.defaultProps = {
    title: "",
    description: "",
    isProspects: true
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '80%'
    },
    image: {
        width: 100, height: 100
    },
    txtTitle: {
        marginTop: 10,
        color: '#555155',
        fontSize: 20,
        fontWeight: 'bold'
    },
    txtDescription: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 14,
        color: '#939093'
    }
})
