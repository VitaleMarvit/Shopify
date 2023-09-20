import { useContext } from "react";
import { ShoppingCartContext } from '../../Context';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faStar, faRotateLeft, faShieldHalved, faAward } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const DetailCards = () => {

    const context = useContext(ShoppingCartContext)

    const cuotas = context.productToShow.price / 12;

    const goBack = () => {
        window.history.back(); 
    };

 
    return (
        <div className='detail relative w-5/6 min-h-pages flex gap-x-8 bg-white border border-solid border-gray p-6 rounded-md'>
            <Link onClick={goBack}>
                <FontAwesomeIcon icon={faChevronLeft} className="absolute atras text-4xl rounded-full"/> 
            </Link>

            <figure className="image p-6">
                <img 
                    src={context.productToShow.images[0]} 
                    alt={context.productToShow.title} 
                    className=" rounded-lg mt-1 mb-4"
                />
            </figure>

            <div className="detalles flex flex-col gap-2 py-4">
                <div>
                    <p className="text-sm font-light text-gray-700">Nuevo | +500 vendidos</p>
                </div>

                <div>
                    <h2 className="text-2xl pb-1">
                        {context.productToShow.title}
                    </h2>
                </div>

                <div className="flex gap-x-2 items-center">
                    <p className="text-gray-700 font-light text-sm">4.9</p>
                    <div className="text-sm">
                        <FontAwesomeIcon icon={faStar} className=" text-yellow-400"/> 
                        <FontAwesomeIcon icon={faStar} className=" text-yellow-400"/>
                        <FontAwesomeIcon icon={faStar} className=" text-yellow-400"/>
                        <FontAwesomeIcon icon={faStar} className=" text-yellow-400"/>
                        <FontAwesomeIcon icon={faStar} className=" text-yellow-400"/>
                    </div>
                    <p className="text-gray-700 font-light text-sm">(176)</p>
                </div>

                <div className="mt-2 mb-4">
                    <p className="text-4xl font-light">${context.productToShow.price}</p>
                    <p className="text-sm font-light">en 12X ${cuotas.toFixed(2)}</p>
                    <p className="text-sm font-light text-gray-700">Compra con cualquier medio de pago</p>
                </div>

                <div>
                    <p className="text-sm mb-2">Lo que tenés que saber de este producto</p>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex gap-x-2">
                            <p className="text-2xl font-bold">·</p>
                            <p className="text-sm font-light">{context.productToShow.description}</p>
                        </div>
                        
                        <div className="flex gap-x-2">
                            <p className="text-2xl font-bold">·</p>
                            <p className="text-sm font-light">{context.productToShow.description}</p>
                        </div>

                        <div className="flex gap-x-2">
                            <p className="text-2xl font-bold">·</p>
                            <p className="text-sm font-light">{context.productToShow.description}</p>
                        </div>

                        <div className="flex gap-x-2">
                            <p className="text-2xl font-bold">·</p>
                            <p className="text-sm font-light">{context.productToShow.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="compra flex flex-col gap-y-6 p-4 border border-gray rounded-md">
                <div className="flex gap-x-1 font-light">
                    <p className=" text-green-500">Llega gratis</p> 
                    <p>en 3 dias habiles</p>
                </div>

                <div>
                    <div className="text-sm flex gap-x-1 font-light">
                        <p>Vendido por</p>
                        <p className="text-blue-600">TECNOAR</p>
                    </div>
                    <p className="text-sm font-light">FyLider | +400 ventas</p>
                    <p className="text-xs font-extralight">Hace Factura A</p>
                </div>

                <div className="flex flex-col gap-y-6 w-full">
                    <p>Stock disponible</p>
                    <div className=" flex gap-x-2 items-center">
                        <p className="text-sm">Cantidad:</p>
                        <input type="number" placeholder="1 Unidad" id="numero" name="numero" min="0" max="20" step="1" className="bg-gray-100 text-sm px-2 py-1 rounded w-5/12 placeholder:text-sm placeholder:px-2"/>
                        <p className="text-xs font-light text-gray-400">(20 disponibles)</p>
                    </div>
                </div>

                <div className="flex flex-col gap-y-2 w-full">
                    <button className="buttonCompra w-full bg-grey border border-white text-white py-3 rounded-md">Comprar ahora</button>
                    <button className="buttonAgregar w-full text-white py-3 rounded-md">Agregar al carrito</button>
                </div>

                <div className="flex flex-col gap-y-3">
                    <div className="flex gap-x-2">
                        <FontAwesomeIcon icon={faRotateLeft} className="text-gray-500"/>
                        <div>
                            <p className="text-sm font-light text-blue-500">Devolución gratis</p>
                            <p className="text-sm font-light text-gray-500"> Tenés 30 días desde que lo recibís.</p>
                        </div>
                    </div>

                    <div className="flex gap-x-2">
                        <FontAwesomeIcon icon={faShieldHalved} className="text-gray-500"/>
                        <div>
                            <p className="text-sm font-light text-blue-500">Compra Protegida</p>
                            <p className="text-sm font-light text-gray-500">Recibí el producto que esperabas o te devolvemos tu dinero.</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-x-2">
                        <FontAwesomeIcon icon={faAward} className="text-lg text-gray-500"/>
                        <p className="text-sm font-light text-gray-500">12 meses de garantía de fábrica.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { DetailCards }