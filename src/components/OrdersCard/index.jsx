import { useState } from "react";
import { Link } from 'react-router-dom'

const OrdersCard = (props) => {

    const { totalPrice, totalProduct } = props
    
    const numero = Math.random()
    const aleatorio = Math.ceil(numero * 12421)
    
    const fechaHoy = new Date();

    const dia = fechaHoy.getDate();
    const mes = fechaHoy.getMonth() + 1; 
    const año = fechaHoy.getFullYear();
    
    const fechaFormateada = `${dia}/${mes}/${año}`;

    console.log(fechaFormateada);

    return (
        <div className="w-ordenes bg-login h-auto p-4 flex flex-col gap-y-6 text-white items-center border border-white">
            <div className="w-full flex justify-between font-light text-sm">
                <p>ORDEN #{aleatorio}</p>
                <p>{fechaFormateada}</p>
            </div>

            <div className="w-full flex gap-x-6">
                <div>
                    <img />
                    <p className="text-sm">PRODUCTOS</p>
                </div>
                <div className="flex flex-col items-start gap-y-2">
                    <div className="flex gap-x-2 items-center">
                        <p>Pago:</p>
                        <p className="font-light text-sm">Pagado</p>
                    </div> 
                    
                    <div className="flex gap-x-2 items-center">
                        <p>Envio:</p>
                        <p className="font-light text-sm">Enviado</p>
                    </div>
                    
                    <div className="flex gap-x-2 items-center">
                        <p>Total:</p>
                        <p className="font-light text-sm">${totalPrice},00</p>
                    </div>

                    <Link to="/ver-detalle" className="text-sm font-light">VER DETALLE</Link>
                </div>
            </div>

            <button className="w-full bg-white text-black py-2 text-sm tracking-subTitles">SEGUIR PRODUCTO</button>
        </div>
    )
}


export { OrdersCard }