import { useContext, useRef, useState } from "react"
import { ShoppingCartContext } from "../../Context"
import { DetalleProducto } from "../../components/Detalle Producto";

const VerDetalle = () => {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf("/") + 1)
    if (index === "last") {
        index = context.order?.length -1
    }

    console.log(context.order);

    return (
        <div className="lay w-screen h-auto min-h-pages py-14 px-20 flex flex-row items-star justify-center gap-x-40 bg-black">
            <div className="w-1/3 flex flex-col items-center">
                <h1 className="w-full p-3 text-white font-medium text-xl text-center mb-6 border-b">Detalles</h1>

                <div className="text-white font-light flex flex-col gap-y-2">
                    <div className="flex gap-x-3 items-center">
                        <p className="font-medium">Fecha: </p>
                        <p className="font-extralight">15/02/2023</p>
                    </div>

                    <div className="flex gap-x-3 items-center">
                        <p className="font-medium">Estado: </p>
                        <p className="font-extralight">Abierta</p>
                    </div>

                    <div className="flex gap-x-3 items-center">
                        <p className="font-medium">Pago: </p>
                        <p className="font-extralight">Pagado</p>
                    </div>
                    
                    <div className="flex gap-x-3 items-center">
                        <p className="font-medium">Medio de pago: </p>
                        <p className="font-extralight">Tarjeta</p>
                    </div>

                    <div className="flex gap-x-3 items-center">
                        <p className="font-medium">Envio: </p>
                        <p className="font-extralight">Enviado</p>
                    </div>
                </div>
            </div>
            <div className="w-2/3">
                <h1 className="w-full p-3 border-b text-white font-medium text-xl text-center mb-6 ">Productos</h1>
                <div className="w-full pb-2 px-4  text-white overflow-y-scroll">
                        {
                            context.order?.[index]?.products.map(order => (
                                <DetalleProducto
                                    key={order.id} 
                                    id={order.id}
                                    title={order.title}
                                    imageUrl={order.images?.[0]}
                                    price={order.price}
                                />
                            ))
                        }
                    </div>
            </div>
        </div>
    )
}

export { VerDetalle }