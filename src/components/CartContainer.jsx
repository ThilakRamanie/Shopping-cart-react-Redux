import cartItems from "../cartItems";
import { useSelector } from "react-redux";
import CartItem from "./CartItem.jsx";
import { useDispatch } from "react-redux";
import { openModal, closeModal } from "../features/model/modelSlice.js";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { amount, cartItems, total } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total.toFixed(2)}</span>
          </h4>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(openModal())}
          >
            Clear Cart
          </button>
        </div>
      </footer>
    </section>
  );
};
export default CartContainer;
