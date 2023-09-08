import { useContext } from "react";
import { ShoppingCartContext } from '../../Context';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const DetailCards = () => {

    const context = useContext(ShoppingCartContext)
 
    return (
        <aside className={`${context.showDetail? 'flex' : 'hidden'} detail mr-10 flex-col fixed right-0 bg-white border border-solid border-gray shadow-detail rounded-lg p-6`}>
            <div className='container-titulo flex justify-center items-center pb-3 mb-3 border-b'>
                <p 
                    className='exit cursor-pointer absolute top-6 left-6'
                    onClick={() => context.closeProductDetail()}>
                    <FontAwesomeIcon icon={faXmark} className="x"/>
                </p>
                <h3 className='titulo text-center'>Detail</h3>
            </div>

            <figure>
                <img 
                    src={context.productToShow.images[0]} 
                    alt={context.productToShow.title} 
                    className="rounded-lg mt-1 mb-4"/>
                <div className="flex flex-col gap-3">
                    <span className="text-2xl">${context.productToShow.price}</span>
                    <h2 className="text-lg pb-1">{context.productToShow.title}</h2>
                </div>

                <p className="text-sm font-light">{context.productToShow.description}</p>
                
            </figure>
        </aside>
    )
}

export { DetailCards }