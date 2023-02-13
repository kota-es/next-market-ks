import React, {useState} from 'react'
import Head from 'next/head'

const Register = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = () => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.vaue
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/user/register",{
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
      })
      const jsonData = await response.json()
      alert(jsonData.message)
    } catch (err) {
      alert("ユーザー登録失敗")
    }
  }

  return (
    <div>
      <Head><title>ユーザー登録</title></Head>
      <h1 className='page-title'>ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <input value={newUser.name} onChange={handleChange} type="text" name="name" placeholder="名前" required />
        <input value={newUser.email} onChange={handleChange} type="text" name="email" placeholder="メールアドレス" required />
        <input value={newUser.password} onChange={handleChange} type="text" name="password" placeholder="パスワード" required />
        <button>登録</button>
      </form>
    </div>
  )
}

export default Register