import { useContext } from "react";
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context';
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

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

        context.setOrder([...context.order, orderToAdd])
        // context.setCartProducts([])
    }

    return (
        <aside className={`${context.isCheckoutSideMenu? 'flex' : 'hidden'} checkout z-0 h-auto mr-10 flex flex-col fixed right-0 bg-white border border-solid border-gray shadow-detail rounded-lg p-6 mt-6`}>
            <div className='container-titulo flex justify-center items-center pb-3 mb-3 border-b'>
                <p 
                    className='exit cursor-pointer absolute top-6 left-6'
                    onClick={() => context.closeCheckoutSideMenu()}>
                    <FontAwesomeIcon icon={faXmark} className="x"/>
                </p> 
                <h3 className='titulo text-center'>Mi Orden</h3>
            </div>
            <div className=" overflow-y-scroll text-black">
                {
                    context.cartProducts.map(product => (
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
            <div className="mt-2 relative bottom-0">
                <p className="flex justify-between">
                    <span>Total:</span>
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