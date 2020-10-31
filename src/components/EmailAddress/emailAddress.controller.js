import React, { useState } from 'react'
import EmailAddress from './emailAddress'

export default function EmailAddressController() {

    const [isVisible, setIsVisible] = useState(true)

    const onPressNext = () => {
        setIsVisible(false)
    }

    return (
        <EmailAddress
            isVisible={isVisible}
            onPressNext={onPressNext}
        />
    )
}

