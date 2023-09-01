import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = (props) => {

  return (
    <section className="tableClass py-3">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
          {props.orders.map((order) => {
            if( order.email === props.email ) return (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>Processing</td>
              <td>{order.itemQty}</td>
              <td>{order.amount}€</td>
              <td>COD</td>
              <td>
              <Link to={`/order/${order.id}`}>
              <AiOutlineEye />
              </Link>
              </td>
            </tr>);
            return <div></div>;
          
          })
          }

           
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
