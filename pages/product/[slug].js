import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import {
  Buy,
  ProductDetailsStyle,
  ProductInfo,
  Quantity,
} from "../../styles/ProductDetails";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "../../lib/context";

export default function ProductDetails() {
  const { qty, incQty, decQty } = useStateContext();
  //QUERY PARAM
  const { query } = useRouter();

  //FETCH
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  //EXTRACT
  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  if (data.products.data[0]) {
    const { title, description, image } = data.products.data[0].attributes;
    return (
      <ProductDetailsStyle>
        <Image
          src={`http://localhost:1337` + image.data.attributes.url}
          width={400}
          height={400}
          objectFit="cover"
          alt={title}
        />
        <ProductInfo>
          <h3>{title}</h3>
          <p>{description}</p>
          <Quantity>
            <span>Quantity</span>
            <button>
              <AiFillMinusCircle onClick={decQty} />
            </button>
            <p>{qty}</p>
            <button>
              <AiFillPlusCircle onClick={incQty} />
            </button>
          </Quantity>
          <Buy>Add to cart</Buy>
        </ProductInfo>
      </ProductDetailsStyle>
    );
  }
}
