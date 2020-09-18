import React from 'react'
import Const from '/src/const'
import MyVirtues from '/src/components/UI/myVirtues'

export default function religious() {
    return (
        <MyVirtues title={"Ethnicity"} dataList={Const.Ethnicity.dataEthnicity} />
    )
}
