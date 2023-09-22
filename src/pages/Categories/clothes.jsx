import { useContext } from 'react'
import clothes from '../../assets/clothes.jpg'
import './index.css'
import { ShoppingCartContext } from '../../Context'
import { Card } from '../../components/Cards'

const Clothes = () => {

    const context = useContext(ShoppingCartContext)

    const Productos = () => {
        if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map(item => (
                    <Card key={item.id} data={item} />
                ))
            )
        } else {
            return (
                <div>We don't have anything :(</div>
            )
        }
    }

    return (
        <div className=''>
            <div className='container-image w-full relative overflow-hidden'>
                <h1 className=' title-categorie w-full h-full flex items-center justify-center text-center text-white text-5xl absolute drop-shadow-drop'>CLOTHES</h1>
                <img className='imagenes-categorias' src={clothes}/>
            </div>

            <div className="w-11/12 relative flex flex-row justify-center items-center overflow-hidden">
                {Productos()}
            </div>
        </div>
    )
}

export { Clothes }