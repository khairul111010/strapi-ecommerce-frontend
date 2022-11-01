import { useStateContext } from "../lib/context";
import { CartWrapper } from "../styles/CartStyle";

export default function Cart() {
  const { cartItems } = useStateContext();
  return (
    <CartWrapper>
      <div>
        <div>
          <h1>You have more shopping to do 😊</h1>
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <h3>Title</h3>
            <h3>Price</h3>
          </div>
        </div>
      </div>
    </CartWrapper>
  );
}
