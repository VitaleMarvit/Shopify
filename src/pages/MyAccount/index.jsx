import { useContext, useRef, useState } from "react"
import { ShoppingCartContext } from "../../Context"
import { Layout } from "../../components/Layout"
import { Link } from 'react-router-dom'
import { OrdersCard } from "../../components/OrdersCard";

function MyAccount() {
    const context = useContext(ShoppingCartContext)
    const [view, setView] = useState('user-info')
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    const form = useRef(null)

    const editAccount = () => {
        const formData = new FormData(form.current) 
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
        }
        const stringifiedAccount = JSON.stringify(data)
        localStorage.setItem('account', stringifiedAccount)
        context.setAccount(data)
    }

    const renderUserInfo = () => {
        return (
            <div className='text-white flex flex-col w-full items-center p-2'>
                <p>
                    <span className='font-bold text-normal'>Nombre: </span>
                    <span className="font-light text-sm">{parsedAccount?.name}</span>
                </p>
                <p>
                    <span className='font-bold text-normal'>Email: </span>
                    <span className="font-light text-sm">{parsedAccount?.email}</span>
                </p>
                <button
                    className='border border-black rounded-lg mt-6 py-3'
                    onClick={() => setView('edit-user-info')}>
                    Edit
                </button>
            </div>
        )
    }

    const renderEditUserInfo = () => {
        return (
            <form ref={form} className='flex flex-col gap-4 w-80'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name" className='font-light text-sm'>Your name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={parsedAccount.name}
                        placeholder="Peter"
                        className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className='font-light text-sm'>Your email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        defaultValue={parsedAccount.email}
                        placeholder="hi@helloworld.com"
                        className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password" className='font-light text-sm'>Your password:</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        defaultValue={parsedAccount.password}
                        placeholder="******"
                        className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                    />
                </div>
                <button
                    className='bg-black text-white w-full rounded-lg py-3'
                    onClick={() => {setView('user-info'), editAccount()}}>
                    Edit
                </button>
            </form>
          )
    }

    const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo()

    return (
        <div className="lay w-screen h-auto min-h-pages py-14 px-20 flex flex-row items-star justify-center gap-x-40 bg-black">
            <div className="w-1/3 flex flex-col items-center">
                <h1 className="w-full p-3 text-white font-medium text-xl text-center mb-6 border-b">Mi Cuenta</h1>
                {renderView()}
            </div>
            <div className="w-2/3">
                <h1 className="w-full p-3 border-b text-white font-medium text-xl text-center mb-6 ">Mis Compras</h1>
                <div className="w-full flex flex-wrap justify-center gap-6 ">
                    {context.order.map((order, index) => (
                        <OrdersCard
                            key={order.id}
                            totalPrice={order.totalPrice} 
                            totalProduct={order.totalProduct} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
  
export { MyAccount }