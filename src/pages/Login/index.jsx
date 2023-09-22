import { Link, Navigate } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { useContext, useRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import './index.css'

function Login() {
    const context = useContext(ShoppingCartContext)
    const [view, setView] = useState('user-info')
    const form = useRef(null)

    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)

    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const handleSignIn = () => {
        const stringifiedSignOut = JSON.stringify(false)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(false)

        return <Navigate replace to={'/'} />
    }

    const creatreAnAccount = () => {
        const formData = new FormData(form.current) 
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
        }
        const stringifiedAccount = JSON.stringify(data)
        localStorage.setItem('account', stringifiedAccount)
        context.setAccount(data)

        handleSignIn()
    }

    const renderLogIn = () => {
        return (
            <div className="flex flex-col gap-y-8 w-80 text-white">
                <div className=" flex flex-col gap-y-6">
                    <h1 className="text-2xl text-center">Ingresar con</h1>

                    <div className="w-full h-auto flex flex-row gap-x-8 justify-center">
                        <button className="rs bg-grey flex items-center justify-center w-1/2"> 
                            <FontAwesomeIcon icon={faGoogle} className=" p-2 text-white text-2xl mr-2"/> 
                            <p>Google</p>
                        </button>

                        <button className="rs bg-grey flex items-center justify-center w-1/2">
                            <FontAwesomeIcon icon={faFacebookF} className=" p-2 text-white text-2xl mr-2"/> 
                            <p>Facebook</p>
                        </button>
                    </div>

                    <p className="text-sm mt-2 text-center">O</p>
                </div>
                <div className="flex flex-col w-80 text-white">
                    <p>
                        <span className="font-light text-lg">Email: </span>
                        <span>{parsedAccount?.email}</span>
                    </p>
                    <p>
                        <span className="font-light text-lg">Contraseña: </span>
                        <span>{parsedAccount?.password}</span>
                    </p>
                    <Link to='/Shopify'>
                        <button 
                            className="login bg-white disabled:bg-gray-500 disabled:hover:transform disabled:text-gray-700 text-black w-full rounded-lg py-3 mt-4 mb-2"
                            onClick={() => handleSignIn()}
                            disabled={!hasUserAnAccount}
                        >
                            Ingresar
                        </button>    
                    </Link>
                    <div className="text-center">
                        <a className="font-light text-xs underline underline-offset-4" href="/">Olvide mi contraseña</a>
                    </div>
                    <button 
                        className="login bg-white text-black border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
                        onClick={() => setView('create-user-info')}
                        disabled={hasUserAnAccount}
                    >
                        Registrarse
                    </button>
                </div>
            </div>
        )
    }

    const renderCreateUserInfo = () => {
        return (
            <form ref={form} className="flex flex-col gap-4 w-80">
                <h1 className="text-white text-2xl text-center">Registrarse</h1>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-white font-normal text-sm">Tu Nombre:</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={parsedAccount?.name}
                        placeholder="Nombre"
                        className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-white font-normal text-sm">Tu Email:</label>
                    <input 
                        type="text"
                        id="email"
                        name="email"
                        defaultValue={parsedAccount?.email}
                        placeholder="hola@holamundo.com"
                        className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="text-white font-normal text-sm">Tu Contraseña:</label>
                    <input 
                        type="text"
                        id="password"
                        name="password"
                        defaultValue={parsedAccount?.password}
                        placeholder="********"
                        className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4 mb-4"
                    />
                </div>
                <Link to="/Shopify">
                    <button 
                        className="login bg-black text-white w-full rounded-lg py-3 mb-6"
                        onClick={() => creatreAnAccount()}    
                    >
                        Crear
                    </button>
                </Link>
            </form>
        )
    }

    const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()

    return (
        <div className="lay w-screen h-pages flex flex-col items-center bg-black">
            <h1 className="font-medium text-4xl tracking-subTitles text-center m-14 w-80 text-white">Bienvenido!</h1>
            <div className="w-auto h-auto p-10 flex flex-col justify-center items-center bg-login border border-white">
                {renderView()}
            </div>
        </div>
    )
}
  
export { Login }