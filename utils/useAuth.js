import { useState, useEffect } from "react";
import { useRouter } from "next/router";


const useAuth = async () => {
  const [loginUser, setLoginUser] = useState("")

  const router = useRouter()

  useEffect(() => {
    (async() => {
      try {
        const response = await fetch("http://localhost:3000/api/user/auth", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "authorization": `Bearer ${localStorage.getItem("token")}`
          },
        })
        if(response.status !== 200) {
          router.push("/user/login")
        }
        const data = await response.json()
        setLoginUser(data.email)
      } catch (error) {
        router.push("/user/login")
      }
    })()
  }, [])

  return loginUser
}

export default useAuth
