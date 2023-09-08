import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const OrderCard = (props) => {

    const {price, title, imageUrl, id, handleDelete} = props
    let renderIcon
    if (handleDelete) {
        'X'
    }

    return (
        <div className="flex justify-between items-center mb-3 ">
            <div className=" flex justify-between items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
                <p className="text-lg font-medium">${price}</p>
                <p 
                    className="h-6 w-6 text-black cursor-pointer"
                    onClick={() => handleDelete(id)}
                    ><FontAwesomeIcon icon={faXmark} className="x"/>{renderIcon}</p>
            </div>
        </div>
    )
}


export { OrderCard }
