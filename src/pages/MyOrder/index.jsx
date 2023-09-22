import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from "../../Context"
import './index.css'
import { OrderCard } from "../../components/OrderCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTag } from '@fortawesome/free-solid-svg-icons'
import { totalPrice } from "../../utils"


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

    
    const vaciarCarrito = () => {
        context.setCartProducts([])
    }


    const carrito = () => {
        if (context.cartProducts?.length === 0) {
            return (
                <p>No hay productos por comprar!</p>
            )
        } else {    
            return (
                <>
                    <div className="w-full pb-2 px-4  text-white overflow-y-scroll">
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
                    <div className="w-full flex flex-col border-t pt-4 gap-y-2 mt-2">
                        <div className="flex justify-between pr-4">
                            <p className="font-light text-lg">Subtotal</p>
                            <p>${totalPrice(context.cartProducts)}</p>
                        </div>
                        
                        <div className="flex justify-between border-b border-white/5 pr-4 pb-3">
                            <p className="font-light text-lg">Costo de envío</p>
                            <p className="font-light text-base">Gratis</p>
                        </div>
                        
                        <div className="flex justify-between pr-4">
                            <p className="font-normal text-2xl">Total</p>
                            <p className="font-normal text-2xl">${totalPrice(context.cartProducts)}</p>
                        </div>
                    </div>

                    <button     
                        className="comprar w-full mt-6 flex justify-center gap-x-2 py-2 bg-grey"
                        onClick={() => vaciarCarrito()}
                    >
                        <p>Comprar Ahora</p>
                    </button>
                    
                    <button className="descuento w-full mt-3 flex justify-center gap-x-2 py-2 ">
                        <FontAwesomeIcon icon={faTag} className="text-2xl"/>
                        <p>¿Tenés un cupón de descuento?</p>
                    </button>
                </>
            )
        }
    }
    
    return (
        <div className="lay w-screen text-white min-h-pages flex flex-col items-center bg-black">
            <div className="w-1/2 flex justify-center relative items-center mt-7 mb-8">
                <h1 className="text-2xl">Mi Orden</h1>
            </div>
            <div className="w-1/3 h-auto mb-12 px-6 py-8 flex flex-col justify-center items-center bg-login border border-white overflow-y-scroll">
                {carrito()}
            </div>
        </div>
    )
}
  
export { MyOrder }