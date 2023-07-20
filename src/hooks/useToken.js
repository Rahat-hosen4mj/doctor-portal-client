import { useEffect } from "react";
import { useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('');
    useEffect(() =>{
        const email = user?.user?.email;
        const currentUser = {email: email}
        if(email){
            fetch(`https://doctor-server-side-six.vercel.app/user/${email}`,{
                method: 'PUT',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data =>{
                console.log('user into useToken', data.token);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken)
            })
        }
    },[user])
    return [token]
}
export default useToken