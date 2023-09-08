import { useContext } from "react";
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context';
import { Layout } from "../../components/Layout"
import { OrdersCard } from "../../components/OrdersCard";



function MyOrders() {

    const context = useContext(ShoppingCartContext)

    return (
        <Layout>
            <div className="w-60 flex justify-center relative items-center mb-4">
                <h1>My Orders</h1>
            </div>
            {context.order.map((order, index) => (
                <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard
                        key={order.id}
                        totalPrice={order.totalPrice} 
                        totalProduct={order.totalProduct} 
                    />
                </Link>
            ))}
        </Layout>
    )
}
  
export { MyOrders } 