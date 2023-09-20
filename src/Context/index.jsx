import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account')
    const signOutInLocalStorage = localStorage.getItem('sign-out')
    let parsedAccount
    let parsedSignOut

    if(!accountInLocalStorage) {
        localStorage.setItem('account', JSON.stringify({}))
        parsedAccount = {}
    } else {
        parsedAccount = JSON.parse(accountInLocalStorage)
    }
    
    if(!signOutInLocalStorage) {
        localStorage.setItem('sign-out', JSON.stringify(false))
        parsedSignOut = false
    } else {
        parsedSignOut = JSON.parse(signOutInLocalStorage)
    }
}

export const ShoppingCartProvider = ({children}) => {

    const [account, setAccount] = useState({})

    const [signOut, setSignOut] = useState(false)

    // Shopping Cart · Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail · Open/Close
    const [showDetail, setShowDetail] = useState(false)
    const openProductDetail = () => setShowDetail(true)
    const closeProductDetail = () => setShowDetail(false)
    
    // Checkout Side Menu · Open/Close
    const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false)

    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [], 
    })

    // Shopping Cart · Add products to cart
    const [cartProducts, setCartProducts] = useState([])
    console.log(cartProducts.length);

    // Shopping Cart · Order
    const [order, setOrder] =useState([])

    // Get products
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null)

    // Get products by title
    const [searchByTitles, setSearchByTitles] = useState(null);
    
    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)
    
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

    const filteredByTitles = (items, searchByTitles) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitles.toLowerCase()))
    }
    
    const filteredByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory?.toLowerCase()))
  }

    const filterBy = (searchType, items, searchByTitles, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredByTitles(items, searchByTitles)
        }
        
        if (searchType === 'BY_CATEGORY') {
            return filteredByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitles.toLowerCase()))
            
        }

        if (!searchType) {
            return items
          }
    }

    useEffect(() => {
        if(searchByTitles && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitles, searchByCategory))
        if(searchByTitles && !searchByCategory) setFilteredItems(filterBy('BY_TITLE' ,items, searchByTitles, searchByCategory))
        if(!searchByTitles && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY' ,items, searchByTitles ,searchByCategory))
        if(!searchByTitles && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitles, searchByCategory))
    }, [items, searchByTitles, searchByCategory])


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            showDetail,
            setShowDetail,
            openProductDetail,
            closeProductDetail,
            productToShow, 
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenu,
            setIsCheckoutSideMenu,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitles,
            setSearchByTitles,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory,
            account,
            setAccount,
            signOut,
            setSignOut
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
