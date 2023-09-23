import { products } from "../Data";
import Layout from "../Layout/Layout";
import { useCart, useCartAction } from "../Providers/CartProvider";
import { CheckInCart } from "../utils/CheckInCart";
import "./PagesStyle.css";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const HomePage = () => {
  const { cart } = useCart();
  const dispatch = useCartAction();
  const addProductHandler = (e, product) => {

      
      dispatch({ type: "ADD_TO_CART", payload: product });
      toast.success(`${product.name} added to carts`);
    
  };
  return (
    <Layout>
      <main className="">
        <section className="product-list">
          {products.map((p) => {
            return (
              <section key={p.id} className="card">
                <div>
                  <img src={p.image} alt={p.name} />
                </div>
                <div className="description">
                  <div>
                    <p>{p.name}</p>
                    <p className="price">{p.price}$</p>
                    <p className="offprice">{p.offPrice}</p>
                  </div>
                  <a
                   
                    onClick={(e) => addProductHandler(e, p)}
              
                  >
                    {CheckInCart(cart, p) ? "in Cart" : "Add To Cart"}
                  </a>
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
