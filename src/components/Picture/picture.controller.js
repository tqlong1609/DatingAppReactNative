import React, { useEffect, useState } from 'react'
import Picture from './picture'
import { launchCamera, launchImageLibrary } from '/src/configs/Camera'
import Api from '/src/api'
import Const from '/src/const'
import Utils from '/src/utils'
// import { BackHandler } from 'react-native'
import { withTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { removeKeyStorage } from '/src/configs/AsyncStorage'
import { resetData, changePictureLoginEmail } from '/src/slice/loginSlice'

let token
let idUser
function PictureController(props) {
    const dispatch = useDispatch()
    const { navigation, t } = props
    const [uriImage, setUriImage] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [dataImage, setDataImage] = useState(null)
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)

    const refModalSlide = React.createRef()
    const dataStore = useSelector(state => state.login)
    console.log(`dataStore: ${JSON.stringify(dataStore)}`);
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

    const handImageData = (res) => {
        const { path, mime } = res
        const typeImage = mime.split('/')[1]
        const nameFile = new Date().getTime().toString() + `.${typeImage}`
        setUriImage(path)
        setDataImage({ uri: path, name: nameFile, type: mime })
    }
    const pressTakePhoto = () => {
        onCloseModalSlide()
        Utils.Images.openCameraCropImage()
            .then(res => handImageData(res))
            .catch(err => console.log(err))
    }
    const pressUploadPhoto = () => {
        onCloseModalSlide()
        Utils.Images.openPickerCropImage()
            .then(res => handImageData(res))
            .catch(err => console.log(err))
    }

    const onPressAdd = () => {
        onOpenModalSlide()
    }

    const uploadImage = async () => {
        setIsLoading(true)
        Api.CloudinaryApi.postImageApiRequest(dataImage)
            .then(res => res.json())
            .then(
                data => {
                    saveDataPhotoApi(data)
                }
            ).catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };

    const saveDataPhotoApi = (data) => {
        const { public_id, url } = data
        const params = {
            url: url,
            publicId: public_id,
            id: idUser,
            token: token
        }
        Api.RequestApi.putPhotosApiRequest(params)
            .then(response => {
                console.log('object')
                dispatch(changePictureLoginEmail({ picture: { publicId: public_id, url: url } }))
                navigation.replace(Const.NameScreens.EditLocation, { isLogin: true })
            }).catch(err => console.log(err))
    }

    const onPressNext = () => {
        uploadImage()
    }

    const onOpenModalSlide = () => {
        refModalSlide.current.open()
    }

    const onCloseModalSlide = () => {
        refModalSlide.current.close()
    }

    const onPressBackButton = () => {
        setIsShowConfirmModal(true)
        // if (navigation.canGoBack()) {
        //     navigation.goBack()
        // } else {
        //     BackHandler.exitApp()
        // }
    }

    const onPressButtonLeft = () => {
        setIsShowConfirmModal(false)
    }

    const logoutUser = () => {
        dispatch(resetData())
        const isSuccess = removeKeyStorage(Const.StorageKey.CODE_LOGIN_TOKEN)
        const isSuccessPre = removeKeyStorage(Const.StorageKey.CODE_PREFERENCES)
        if (isSuccess && isSuccessPre) {
            // if (navigation.canGoBack()) {
            //     navigation.goBack()
            // } else {
            navigation.replace(Const.NameScreens.Login)
            // }
        }
    }

    const onPressButtonRight = () => {
        setIsShowConfirmModal(false)
        logoutUser()
    }

    return (
        <Picture
            t={t}
            onPressBack={onPressBackButton}
            pressUploadPhoto={pressUploadPhoto}
            pressTakePhoto={pressTakePhoto}
            uri={uriImage}
            onPressNext={onPressNext}
            onPressAddButton={onPressAdd}
            isLoading={isLoading}
            ref={refModalSlide}
            onShowModalSlide={onOpenModalSlide}
            isShowConfirmModal={isShowConfirmModal}
            setIsShowConfirmModal={setIsShowConfirmModal}
            onPressButtonLeft={onPressButtonLeft}
            onPressButtonRight={onPressButtonRight}
        />
    )
}

export default withTranslation()(PictureController)
