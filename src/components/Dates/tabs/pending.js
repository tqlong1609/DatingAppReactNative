import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EmptyPerform from '/src/components/UI/emptyPerform'
import PropTypes from 'prop-types'

function Pending(props) {
    const { t } = props
    return (
        <View style={styles.container}>
            <EmptyPerform
                title={t("You have no pending dates")}
                source={require('/src/assets/images/broke.png')}
                description={t("Description Pending")}
            />
        </View>
    )
}

Pending.propTypes = {
    t: PropTypes.func.isRequired,
}

export default Pending

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


