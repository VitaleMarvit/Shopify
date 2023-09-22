import shoes from '../../assets/shoes.jpg'

const Shoes = () => {
    return (
        <div>
            <div className='container-image w-full relative overflow-hidden'>
                <h1 className=' title-categorie w-full h-full flex items-center justify-center text-center text-white text-5xl absolute drop-shadow-drop'>SHOES</h1>
                <img className='imagenes-categorias' src={shoes}/>
            </div>

            <div></div>
        </div>
    )
}

export { Shoes }