import Image from "next/image"
import Link from "next/link"

const ReadAllItems = (props) => {
  
  return (
    <div>
      <h1 className="h1-style">こんにちは</h1>
      <h3>さようなら</h3>
      {props.allItems.map(item =>
        <Link href={`/item/${item._id}`} key={item._id}>
          <Image src={item.image} width="750" height="500" alt="item-image" />
          <h2>¥{item.price}</h2>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Link>
      )}
    </div>
  )
}

export default ReadAllItems

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/item/readall")
  const allItems = await response.json()
  return {
    props: allItems
  }
}