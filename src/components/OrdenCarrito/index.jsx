const OrdenCarrito = (props) => {

    const {price, title, imageUrl} = props

    return (
        <div className="w-full flex justify-between items-center mb-3 ">
            <div className="w-full flex justify-between items-center gap-4">
                <figure className="w-1/4 h-full">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>

                <div className="w-3/4">
                    <p className="w-full text-sm font-normal">{title}</p>
                    <p className="w-full text-start text-base font-light">${price}</p>
                    <p className="w-full text-xs text-green-500">Agregado al carrito!</p>
                </div>
            </div>
        </div>
    )
}


export { OrdenCarrito }
