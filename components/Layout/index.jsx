import './index.css'

const Layout = ( {children} ) => {
    return (
        <div className="lay w-screen h-auto flex flex-col items-center bg-black">
            {children}
        </div>
    )
}

export { Layout }