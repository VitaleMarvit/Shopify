import { useContext } from "react";
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context';
import { totalPrice } from "../../utils";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { OrdenCarrito } from "../OrdenCarrito";

const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckOut = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.lenght,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.closeCheckoutSideMenu()

        context.setOrder([...context.order, orderToAdd])
        // context.setCartProducts([])
    }

    const productos = () => {
        context.cartProducts.length === 1? `(1 Producto)`: `(${context.cartProducts.length} Productos)`
    }

    return (
        <aside className={`${context.isCheckoutSideMenu? 'flex' : 'hidden'} checkout z-40 h-auto mr-6 flex flex-col fixed right-0 bg-white rounded-sm mt-6`}>
            <div className='container-titulo absolute'>
                <p 
                    className='exit cursor-pointer absolute top-1 left-1'
                    onClick={() => context.closeCheckoutSideMenu()}>
                    <FontAwesomeIcon icon={faXmark} className="x"/>
                </p> 
            </div>
            <div className="px-6 pt-8 overflow-y-scroll text-black border-b">
                {
                    context.cartProducts.map(product => (
                        <OrdenCarrito 
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
            <div className="mt-2 px-6 pb-6 relative bottom-0">
                <p className="flex justify-between">
                    <span>Total {context.cartProducts.length === 1? `(1 Producto)`: `(${context.cartProducts.length} Productos)`}:</span>
                    <span>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to="/my-orders/last">
                    <button 
                        className="bg-slate-900 text-white py-2 px-4 text-sm mt-2 rounded-md w-full" 
                        onClick={() => handleCheckOut()}
                    >Ver Carrito</button>
                </Link>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu }