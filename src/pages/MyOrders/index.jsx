import { useContext } from "react";
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context';
import { Layout } from "../../components/Layout"
import { OrdersCard } from "../../components/OrdersCard";



function MyOrders() {

    const context = useContext(ShoppingCartContext)

    return (
        <Layout>
            {/* <div className="w-1/2 flex justify-center relative items-center my-14 text-white">
                <h1 className="text-2xl">Mis Ordenes</h1>
            </div>
            {context.order.map((order, index) => (
                <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard
                        key={order.id}
                        totalPrice={order.totalPrice} 
                        totalProduct={order.totalProduct} 
                    />
                </Link>
            ))} */}
        </Layout>
    )
}
  
export { MyOrders } 