import React, { useEffect } from 'react'
import InterestInfomation from './interestInfomation'
import { useSelector } from 'react-redux'
import Api from '/src/api'
let arrInterest = []
let idUser
let token
export default function InterestInfomationController(props) {
    const { navigation, route } = props
    useEffect(() => {
        arrInterest.push(...route.params.data)
    }, [])

    const dataStore = useSelector(state => state.login)

    const getDataStore = () => {
        if (dataStore.length > 0) {
            const { jwtToken, id } = dataStore[0]
            token = jwtToken
            idUser = id
        }
        else {
            return null // empty data
        }
    }

    useEffect(() => {
        getDataStore()
    }, [])
    const onPressBack = () => {
        navigation.goBack()
    }

    const saveInterestApi = (item) => {
        const params = {
            token,
            id: idUser,
            idInterest: item.id
        }
        Api.RequestApi.postInterestApiRequest(params)
            .then(response => {
                console.log(`response: ${response}`);
            }).catch(err => {
                console.log(err)
            })
    }

    const removeInterestApi = (item) => {
        const params = {
            token,
            id: idUser,
            idInterest: item.id
        }
        Api.RequestApi.deleteInterestApiRequest(params)
            .then(response => {
                console.log(`response: ${response}`);
            }).catch(err => {
                console.log(err)
            })
    }

    const selectedItem = (item) => {
        const index = arrInterest.findIndex(e => e.label == item.label)

        if (index >= 0) {
            arrInterest = arrInterest.filter((ele) => {
                return ele.label != item.label;
            });
            removeInterestApi(item)
        }
        else {
            arrInterest.push(item)
            saveInterestApi(item)
        }
    }

    return (
        <InterestInfomation
            onPressBack={onPressBack}
            selectedItem={selectedItem}
            arrInterest={route.params.data}
        />
    )
}

