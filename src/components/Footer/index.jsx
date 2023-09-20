import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTiktok, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className='w-full h-footer flex flex-col bg-white'>
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
            <div className='w-full h-auto bg-white flex flex-col gap-2 justify-center items-center pb-8 text-sm font-light tracking-subTitles text-gray-600'>
                <p>© SHOPIFY - 2023.</p>
                <p>Diseñado y Desarrollado por<a href='https://www.linkedin.com/in/mariano-vitale-tasso/' target='_blank' className='mariano py-1 px-2 rounded-lg font-normal text-black tracking-normal text-base'>Mariano Vitale Tasso</a></p>
            </div>
        </div>

    )
}

export { Footer }