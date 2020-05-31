import React from 'react'
import {UserContext, SurnameContext} from '../../App'

export default function ComponentC() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    name => {
                        return(
                            <SurnameContext>
                                {
                                    surname => {
                                    return(<div>My name is {name} {surname}</div>)
                                    }
                                }
                            </SurnameContext>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}
