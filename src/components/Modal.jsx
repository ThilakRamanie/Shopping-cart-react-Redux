import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/model/modelSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <aside className="modal-container">
        <div className="modal">
          <h4>Remove all items from your shopping cart?</h4>
          <div className="btn-container">
            <button
              className="btn confirm-btn"
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
            >
              Confirm
            </button>
            <button
              className="btn clear-btn"
              onClick={() => dispatch(closeModal())}
            >
              Cancel
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Modal;
