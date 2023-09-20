const OrderCard = (props) => {

    const {price, title, imageUrl, id, handleDelete} = props
    let renderIcon
    if (handleDelete) {
        'X'
    }

    return (
        <div className="w-full flex justify-between items-center mb-3 ">
            <div className="w-full flex justify-between items-center gap-2">
                <figure className="w-1/6 h-full">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="w-3/6 text-lg font-light">{title}</p>
                <p className="w-1/6 text-base text-right font-light">${price}</p>
            </div>
        </div>
    )
}


export { OrderCard }
