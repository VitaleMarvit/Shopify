import './index.css'
import { Layout } from "../../components/Layout"
import { Card } from "../../components/Cards"
import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { DetailCards } from "../../components/Details";
import { ShoppingCartContext } from "../../Context";
import portada from '../../assets/portada.jpg';
import sales from '../../assets/sale.jpg';
import local from '../../assets/local.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faCreditCard, faShieldHalved, faEye } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTiktok, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Home() {
    const context = useContext(ShoppingCartContext)

    const renderView = () => {
        if (context.filteredItems?.length > 0) {
          return (
            context.filteredItems?.slice(0,10).map(item => (
              <Card key={item.id} data={item} />
            ))
          )
        } else {
          return (
            <div>We don't have anything :(</div>
          )
        }
      }

    const imagenes = context.items;
    console.log(imagenes);

    return (
        <Layout>
            <img src={portada}/>

            <div className=" w-full h-auto bg-grey flex justify-around py-8">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faTruck} className=" text-gray-300 text-3xl pr-4"/> 

                <div className="text-white">
                  <h3 className=" text-lg font-light4">Enviós Gratis</h3>
                  <p className=" text-base font-light4">En compras superiores a $60.000</p>
                </div>
              </div>

              <div className="flex items-center">
                <FontAwesomeIcon icon={faCreditCard} className="text-gray-300 text-3xl pr-4"/> 

                <div className="text-white">
                  <h3 className=" text-lg font-light4">3 y 6 cuotas sin interés</h3>
                  <p className=" text-base font-light4">Con tarjetas de crédito bancarias</p>
                </div>
              </div>

              <div className="flex items-center">
                <FontAwesomeIcon icon={faShieldHalved} className="text-gray-300 text-3xl pr-4"/> 

                <div className="text-white">
                  <h3 className=" text-lg font-light4">Comprá de manera segura</h3>
                  <p className=" text-base font-light4">Protegemos tus datos</p>
                </div>
              </div>
            </div>

            <div className="w-11/12 flex h-auto justify-center flex-col pt-20 pb-2">
              <h2 className="text-white text-xl text-center tracking-subTitles underline-offset-2 mb-8">OFERTAS</h2>
              
              <div className="w-auto h-full relative flex gap-5 justify-center items-center overflow-hidden">
                {/* <div className='side w-side h-full bg-white/30 absolute left-0 backdrop-blur-sm'></div> */}
                {renderView()}
                {/* <div className='side w-side h-full bg-white/30 absolute right-0 backdrop-blur-sm'></div> */}
              </div>
            </div>

            <div className="w-11/12 h-auto flex flex-row gap-10 pt-20 pb-2">
              <div className="w-1/3 relative flex justify-center items-center overflow-hidden cursor-pointer">
                {/* <img src={imagenes?.[100].images} className="imagenes"/> */}
                <p className="text-white absolute text-3xl drop-shadow-drop">CLOTHES</p>
              </div>
              
              <div className="w-1/3 relative flex justify-center items-center overflow-hidden cursor-pointer">
                {/* <img src={imagenes?.[30].images} className="imagenes"/> */}
                <p className="text-white absolute text-3xl drop-shadow-drop">ELECTRONICS</p>
              </div>
              
              <div className="w-1/3 relative flex justify-center items-center overflow-hidden cursor-pointer">
                {/* <img src={imagenes?.[134].images} className="imagenes"/> */}
                <p className="text-white absolute text-3xl drop-shadow-drop">SHOES</p>
              </div>
            </div>

            <div className="w-11/12 flex h-auto justify-center flex-col pt-20 pb-2">
              <h2 className="text-white text-xl text-center tracking-subTitles underline-offset-2 mb-8">PRODUCTOS RECOMENDADOS</h2>
              
              <div className="w-auto h-full relative flex gap-5 justify-center items-center overflow-hidden ">
                  {renderView()}
              </div>
            </div>

            <div className='w-11/12 h-auto flex flex-col pt-20 pb-2'>
              <div className='w-full h-auto flex justify-between'>
                <div className='w-1/2 '>
                  <img src={sales}/>
                </div>

                <div className='w-1/2 flex flex-col justify-center items-center text-white'>
                  <h2 className='title text-3xl'>SALES</h2>

                  <p className='text-lg pt-2 pb-6'>Conoce nuestros mejores productos.</p>
                  
                  <button className="sale w-1/4 flex justify-center items-center cursor-pointer bg-white py-2 ml-2 rounded-sm border-2 border-black">
                    <FontAwesomeIcon icon={faEye} className="text-sm text-black pr-2"/> 
                    <p className="text-xs text-black">VER SALES</p>
                  </button>
                </div>
              </div>

              <div className='w-full h-auto flex justify-between'>
                <div className='w-1/2 flex flex-col justify-center items-center text-white'>
                  <h2 className='title text-3xl'>LOCALES</h2>
                  
                  <p className='text-lg pt-2 pb-6'>Visita nuestros locales y encuentra tu producto perfecto.</p>
                  
                  <button className="sale w-1/4 flex justify-center items-center cursor-pointer bg-white py-2 ml-2 rounded-sm border-2 border-black">
                    <FontAwesomeIcon icon={faEye} className="text-black text-sm pr-2"/> 
                    <p className="text-xs text-black">VER LOCALES</p>
                  </button>
                </div>

                <div className='w-1/2 '>
                  <img src={local}/>
                </div>
              </div>
            </div>

            <div>
              <h1 className='text-white text-5xl tracking-frase font-oswald pt-36 pb-36'>COMPRAR NUNCA FUE TAN FACIL.</h1>
            </div>

            <div className='w-full h-footer bg-white'>
              <div className='w-11/12 h-full py-10 mx-auto flex items-start justify-center'>
                <a className="w-1/4 font-oswald text-3xl tracking-widest font-normal mr-6 " href='/'>SHOPIFY</a>

                <div className='w-1/4'>
                  <ul className='flex flex-col gap-4'>
                    <p className='text-xl tracking-subTitles'>Menú</p>

                    <li className='footer-menu text-gray-700 text-base font-light'>
                      <NavLink to='/electronics' onClick={() => context.setSearchByCategory('electronics')}>
                        Clothes
                      </NavLink>
                    </li>
                    
                    <li className='footer-menu text-gray-700 text-base font-light'>
                      <NavLink to='/electronics' onClick={() => context.setSearchByCategory('electronics')}>
                        Electronics
                      </NavLink>
                    </li>
                    
                    <li className='footer-menu text-gray-700 text-base font-light'>
                      <NavLink to='/shoes' onClick={() => context.setSearchByCategory('shoes')}>
                        Shoes
                      </NavLink>
                    </li>
                  </ul>
                </div>
                
                <div className='w-1/4 flex flex-col gap-4'>
                  <p className='text-xl tracking-subTitles'>Contactános</p>

                  <a href='/' className='text-base font-light'>ventas@shopify.com.ar</a>

                  <p className='text-base font-light'>Aristides Villanueva 403, Mendoza. AR.</p>
                </div>
                
                <div className='w-1/4 flex flex-col gap-4'>
                  <p className='text-xl tracking-subTitles'>Redes Sociales</p>

                  <div className='flex gap-4'>
                    <a href='/'>
                      <FontAwesomeIcon icon={faFacebook} className="rrss p-2 text-white text-2xl bg-black rounded-full"/> 
                    </a>
                    
                    <a href='/'>
                      <FontAwesomeIcon icon={faInstagram} className="rrss p-2 text-white text-2xl bg-black rounded-full"/> 
                    </a>
                    
                    <a href='/'>
                      <FontAwesomeIcon icon={faTiktok} className="rrss p-2 text-white text-2xl bg-black rounded-full"/> 
                    </a>
                    
                    <a href='/'>
                      <FontAwesomeIcon icon={faTwitter} className="rrss p-2 text-white text-2xl bg-black rounded-full"/> 
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full h-auto bg-white flex flex-col gap-2 justify-center items-center pb-8 text-sm font-light tracking-subTitles text-gray-600'>
              <p>© SHOPIFY - 2023.</p>
              <p>Diseñado y Desarrollado por<a href='https://www.linkedin.com/in/mariano-vitale-tasso/' target='_blank' className='mariano py-1 px-2 rounded-lg font-normal text-black tracking-normal text-base'>Mariano Vitale</a></p>
            </div>
            <DetailCards data = {context.items}/>
        </Layout>
    )
    
}
  
export { Home }