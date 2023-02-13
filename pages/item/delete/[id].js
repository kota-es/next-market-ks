import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

const UpdateItem = (props) => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:3000/api/item/delete/${props.singleItem._id}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("token")}`
        },
      })
      const jsonData = await response.json()
      alert(jsonData.message)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className='delete-page'>
      <Head><title>アイテム削除</title></Head>
      <h1 className='page-title'>アイテム削除</h1>
      <form onSubmit={handleSubmit}>
        <h2>{props.singleItem.item}</h2>
        <Image src={props.singleItem.image} width="750" height="500" alt="item-image"/>
        <h3>¥{props.singleItem.price}</h3>
        <p>{props.singleItem.description}</p>
        <button>削除</button>
      </form>
    </div>
  )
}

export default UpdateItem

export const getServerSideProps = async (context) => {
  const response = await fetch(`http://localhost:3000/api/item/${context.query.id}`)
  const singleItem = await response.json()

  return {
    props: singleItem
  }
}