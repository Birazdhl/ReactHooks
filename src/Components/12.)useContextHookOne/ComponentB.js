import React, { useContext } from 'react'
import ComponentC from './ComponentC'

import {UserContext, SurnameContext} from '../../App'

export default function ComponentB() {

    const user = useContext(UserContext)
    const surName = useContext(SurnameContext)

    return (
        <div>
            {user} - {surName}
        </div>
    )
}
