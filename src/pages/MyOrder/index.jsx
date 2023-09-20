import { useContext } from "react"
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from "../../Context"
import './index.css'
import { OrderCard } from "../../components/OrderCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTag } from '@fortawesome/free-solid-svg-icons'


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

    const carrito = () => {
        if (context.cartProducts?.length === 0) {
            return (
                <p>No hay productos por comprar!</p>
            )
        } else {    
            return (
                <>
                    <div className="w-full pb-2 pl-4 border-b text-white">
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
                    <div className="w-full flex flex-col gap-y-2 mt-2">
                        <div>
                            <p className="font-light text-lg">Subtotal</p>
                            <p></p>
                        </div>
                        
                        <div className="flex justify-between border-b border-white/5 pb-2">
                            <p className="font-light text-lg">Costo de envío</p>
                            <p className="font-light text-base">Gratis</p>
                        </div>
                        
                        <div>
                            <p className="font-normal text-2xl">Total</p>
                            <p className="font-normal text-2xl"></p>
                        </div>
                    </div>
                    <button className="descuento w-full mt-6 flex justify-center gap-x-2 py-2 bg-grey ">
                        <FontAwesomeIcon icon={faTag} className="text-2xl"/>
                        <p>¿Tenés un cupón de descuento?</p>
                    </button>
                </>
            )
        }
    }
    
    return (
        <div className="lay w-screen text-white h-pages flex flex-col items-center bg-black">
            <div className="w-1/2 flex justify-center relative items-center my-14">
                <h1 className="text-2xl">Mi Orden</h1>
            </div>
            <div className="w-1/3 h-auto px-6 py-8 flex flex-col justify-center items-center bg-login border border-white overflow-y-scroll">
                {carrito()}
            </div>
        </div>
    )
}
  
export { MyOrder }