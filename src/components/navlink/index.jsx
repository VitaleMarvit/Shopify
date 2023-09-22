import './index.css';
import { NavLink } from "react-router-dom"; 
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

    const context = useContext(ShoppingCartContext)

    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut

    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)

    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUseranAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }

    const renderView = () => {
        if (hasUseranAccount && !isUserSignOut) {
            return (
                <>
                    <li className="user px-1 mx-1 text-base rounded text-white/70">
                        <NavLink to='/my-account'>
                            <FontAwesomeIcon icon={faUser} className=" mr-1"/> {parsedAccount?.name}
                        </NavLink>
                    </li>
                    <li className="px-1 mx-1 text-base rounded hover">
                        <NavLink 
                            to='/login'
                            onClick={() => handleSignOut()}>
                            Sign Out
                        </NavLink>
                    </li>
                    <li className="px-1 mx-1 text-base rounded">
                        <NavLink to='/my-orders/last'>
                            <FontAwesomeIcon icon={faCartShopping} className="icon-music" /> {context.cartProducts.length}
                        </NavLink>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li className="px-1 mx-1 text-base rounded hover">
                        <NavLink 
                            to='/login'
                            onClick={() => handleSignOut()}>
                            Sign In
                        </NavLink>
                    </li>
                </>
            )
        }
    }

    return (
        <nav className="w-screen h-nav flex fixed z-50 top-0 justify-between bg-black py-4 px-6 text-white font-jost font-light">
            <ul className="flex justify-between items-center">
                <li className=" font-oswald text-2xl tracking-widest font-normal mr-6 ">
                    <NavLink to={`${isUserSignOut ? '/login' : '/Shopify'}`}>
                        SHOPIFY
                    </NavLink>
                </li>
                <li className="px-1 mx-1 text-base rounded hover">
                    <NavLink to='/Shopify/clothes' onClick={() => context.setSearchByCategory('Clothes')}>
                        Clothes
                    </NavLink>
                </li>
                <li className="px-1 mx-1 text-base rounded hover">
                    <NavLink to='/Shopify/electronics' onClick={() => context.setSearchByCategory('electronics')}>
                        Electronics
                    </NavLink>
                </li>
                <li className="px-1 mx-1 text-base rounded hover">
                    <NavLink to='/Shopify/shoes' onClick={() => context.setSearchByCategory('shoes')}>
                        Shoes
                    </NavLink>
                </li>
            </ul>

            <div className="buscador w-1/4 px-4 my-1 flex justify-between rounded-md focus:outline-none text-black bg-white">
                <input 
                    type="text" 
                    placeholder="Search a product" 
                    className=" w-full pr-4 rounded-lg focus:outline-none text-black"
                    onChange={(event) => context.setSearchByTitles(event.target.value)}/>
                <button className="my-2 border-l border-black/20">
                    <FontAwesomeIcon icon={faSearch} className="pl-4 text-base text-black/60"/>
                </button>
            </div>

            <ul className="flex justify-between items-center">
                {renderView()}
            </ul>
        </nav>
    )
}

export { Navbar }