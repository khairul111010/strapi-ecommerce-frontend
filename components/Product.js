import Image from 'next/image'

export default function Product({product}) {
    const {title,price,image} = product.attributes;
 
  return (
    <div>
        <div>
            <Image src={`http://localhost:1337`+image.data.attributes.url} width={400} height={400} objectFit='cover'/>
        </div>
        <h2>{title}</h2>
        <h2>{price}</h2>
    </div>
  )
}
