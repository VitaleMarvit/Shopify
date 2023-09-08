const OrdersCard = (props) => {

    const { totalPrice, totalProduct } = props

    return (
        <div className="flex flex-col justify-between items-center mb-3 border border-black py-2 px-8 rounded-md">
            <p>01.02.2023</p>
            <p>{totalProduct}</p>
            <p>${totalPrice}</p>
        </div>
    )
}


export { OrdersCard }