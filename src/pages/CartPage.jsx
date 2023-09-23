import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useCart, useCartAction } from "../Providers/CartProvider";
import "./../pages/PagesStyle.css";
const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartAction();
  const removeHandler = (e, product) => {
    e.preventDefault();
    dispatch({ type: "REMOVE_CART", payload: product });
  };
  const incrementHandler = (e, product) => {
    e.preventDefault();
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Layout>
      <main className="choosen-cart">
        <section   className="cart-list">
          {!cart ? (
            <p>Go shop</p>
          ) : (
            cart.map((c) => {
              return (
                <section key={c.id} className="cart-detail">
                  <div>
                    <img src={c.image} alt="shoe-photo" />
                  </div>
                  <div className="description">
                    <p>{c.name}</p>
                    <p>{c.offPrice * c.quantity}$</p>
                  </div>
                  <div className="description">
                    <div>{c.quantity}</div>
                    <button onClick={(e) => incrementHandler(e, c)}>+</button>
                    <button onClick={(e) => removeHandler(e, c)}>
                      {"- "}
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </section>
        <section className="cart-summery">
          <CartSummery cart={cart} total={total} />
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;

const CartSummery = ({ cart, total }) => {
  const originalNetPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;
  return (
    <section>
      <h2>Cart-Summery</h2>
      <div className="summery-data">
        <div>Pervious Total : {originalNetPrice}$</div>
        <div>Cart Discount : {originalNetPrice - total}$</div>
        <div>total :{total}$</div>
      </div>
      <div className="buy-btn">
      <Link to="/checkout">
      <button>
        Buy
        </button>
        </Link>
      </div>
    </section>
  );
};
