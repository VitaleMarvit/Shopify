import './index.css'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Card = (data) => {

    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.closeCheckoutSideMenu()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation();
        context.openCheckoutSideMenu();
        context.closeProductDetail()
        context.setCount(context.count + 1);
        context.setCartProducts([...context.cartProducts, productData]);
        console.log(context.isCheckoutSideMenu);
    }

    return (
        <div 
            className='card flex flex-col w-full bg-white border border-black/25 relative z-20 rounded-lg'
            // data-aos="fade-up" 
            // data-aos-offset="200"
        >
            <figure className=' w-full h-3/5 p-4 m-auto relative text-center'>
                <img src={data.data.images[0]} alt={data.data.title} className='image-swiper w-full h-full object-cover rounded-lg relative z-10'/>
            </figure>
            
            <div className='w-full px-4 h-1/5 flex flex-col justify-between items-start'>
                <h3 className='mb-3 text-black text-base font-light uppercase text-left'>{data.data.title}</h3>
                <p className='text-black text-xl mb-6'>${data.data.price}</p>
            </div>

            <div className="w-full h-1/4 flex flex-row justify-around items-end px-4 pb-4">
                <button 
                    className="agregar w-11/12 h-3/5 flex justify-center items-center mr-2 cursor-pointer bg-black rounded-lg"
                    onClick={(event) => addProductsToCart(event, data.data)}
                >
                    <FontAwesomeIcon icon={faCartShopping} className="text-sm pr-2 text-white"/> 
                    <p className="text-white text-xs">AGREGAR</p>
                </button>
                
                <Link 
                    to={'/details'}
                    className="ver w-11/12 h-3/5 flex justify-center items-center cursor-pointer bg-white py-2 ml-2 rounded-lg border-2 border-black"
                >
                    <button 
                        className='flex'
                        onClick={() => showProduct(data.data)}
                    >
                        <FontAwesomeIcon icon={faEye} className="text-sm pr-2"/> 
                        <p className="text-xs">VER</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export { Card }