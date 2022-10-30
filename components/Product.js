import Image from "next/image";
import { ProductStyle } from "../styles/ProductStyle";
import Link from "next/link";
export default function Product({ product }) {
  const { title, price, image, slug } = product.attributes;
  return (
    <ProductStyle>
      <Link href={`/product/${slug}`}>
        <div>
          <Image
            src={`http://localhost:1337` + image.data.attributes.url}
            width={400}
            height={400}
            objectFit="cover"
          />
        </div>
      </Link>

      <h2>{title}</h2>
      <h2>{price}</h2>
    </ProductStyle>
  );
}
