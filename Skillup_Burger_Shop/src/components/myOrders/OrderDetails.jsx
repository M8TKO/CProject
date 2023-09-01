import React from "react";
import { useLocation } from 'react-router-dom';
const OrderDetails = (props) => {
    
    const id = useLocation().pathname.slice(-1) - 1;
    
    return (
        <section className="orderDetails py-3">
            <main>
                <h1 className="pb-3">Order Details</h1>
                <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address</b>
                    {props.orders[id].country},{props.orders[id].state},{props.orders[id].pinCode}
                </p>
                </div>
                <div>
                <h1>Contact</h1>
                <p>
                    <b>Name</b>
                    {props.orders[id].name}
                </p>
                <p>
                    <b>Phone</b>
                    {props.orders[id].phone}
                </p>
                </div>
                <div>
                    <h1>Status</h1>
                    <p>
                        <b>Order Status</b>
                        {"Processing"}
                    </p>
                    <p>
                        <b>Placed At</b>
                        {props.orders[id].date}
                    </p>
                    <p>
                        <b>Delivered At</b>
                        Delivery in progress
                    </p>
                </div>
                <div>
                    <h1>Payment</h1>
                    <p>
                        <b>Payment Method</b>
                        {"COD"}
                    </p>
                    <p>
                        <b>Payment Reference</b>#{id}
                    </p>
                    <p>
                        <b>Paid At</b>
                        Upon delivery
                    </p>
                </div>
                <div>
                    <h1>Amount</h1>
                    <p>
                        <b>Items ordered</b>{props.orders[id].itemQty}
                    </p>
                    <p>
                        <b>Shipping Charges</b>1€                    </p>
                    <p>
                        <b>Tax</b>{props.orders[id].tax}€
                    </p>
                    <p>
                        <b>Total Amount</b>{props.orders[id].amount}€
                    </p>
                </div>
                <article>
                    <h1 className="pt-3">Ordered Items</h1>
                    <div>
                        <h4>Cheese Burger</h4>
                        <div>
                            <span>{props.orders[id].burger1}</span> x <span>4€</span>
                        </div>
                    </div>
                    <div>
                        <h4>Veg Cheese Burger</h4>
                        <div>
                            <span>{props.orders[id].burger2}</span> x <span>5€</span>
                        </div>
                    </div>
                    <div>
                        <h4>Burger Fries</h4>
                        <div>
                            <span>{props.orders[id].burger3}</span> x <span>8€</span>
                        </div>
                    </div>
                    <div>
                        <h4
                        style={{
                        fontWeight: 800,
                        }}
                        >
                        Sub Total
                        </h4>
                        <div
                        style={{
                        fontWeight: 800,
                        }}
                        >
                        {props.orders[id].subTotal}€
                        </div>
                    </div>
                </article>
            </main>
        </section>
    );
};
export default OrderDetails;
