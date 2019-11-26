import React, {useRef, useState} from 'react'
import {browserHistory} from '../../App'
import { Button } from '@material-ui/core'

export default function Login(props){
    const emailRef = useRef(null)
    const [email, setEmail] = useState(null)

    const passwordRef = useRef(null)
    const [password, setPassword] = useState(null)

    return (
       <div>
           <input ref={emailRef} />
           <input ref={passwordRef} type="password" />

           <Button onClick={() => Meteor.loginWithPassword(emailRef.current.value, passwordRef.current.value)}>enviar</Button>
       </div>
    )
}