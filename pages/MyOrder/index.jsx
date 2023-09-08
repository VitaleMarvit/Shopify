import { useContext } from "react"
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from "../../Context"
import { Layout } from "../../components/Layout"
import { OrderCard } from "../../components/OrderCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


function MyOrder() {
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf("/") + 1)
    if (index === "last") {
        index = context.order?.length -1
    }
    console.log(index);
    
    return (
        <Layout>
            <div className="w-60 flex justify-center relative items-center mb-6">
                <Link to="/my-orders" className="absolute left-0">
                    <FontAwesomeIcon icon={faArrowLeft} className="x"/>
                </Link>
                <h1>My Order</h1>
            </div>
            <div className=" overflow-y-scroll">
                {
                    context.order?.[index]?.products.map(product => (
                        <OrderCard
                            key={product.id} 
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images[0]}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}
  
export { MyOrder }