import './Shop.css';
import {useState} from "react";
import CartList from './CartList';
import Product from './Product';

export default function Shop() {

    const [state, setState] = useState({
        cartCount: 0,
        // список товаров в корзине
        cartList: [
            // {
            //     id: 2, 
            //     name: 'телевизор', 
            //     price: 5500, 
            //     img: './',
            //     amount: 1
            // },
        ],
        // стоимость всех товаров товаров в руб.
        cartAmount: 205000,
        // выбранные товары
        products: [
            {id: 2, name: 'Телевизор', price: 5500, img: './', amount: 1},
            {id: 3, name: 'Холодильник', price: 40000, img: './', amount: 1},
            {id: 4, name: 'Утюг', price: 2400, img: './', amount: 1},
            {id: 5, name: 'Тостер', price: 6600, img: './', amount: 1},
            {id: 6, name: 'Кострюля', price: 750, img: './', amount: 1}

        ],
    });

    const checkProductInCart = (checkProduct) => {
        checkProduct.amount++
        
        let uncheckProducts = state.cartList.find(product => product.id !== checkProduct.id )

        console.log(checkProduct);
        setState({
            ...state,
            cartCount: state.cartCount + 1,
            cartAmount: state.cartAmount + checkProduct.price,
            cartList: [
                checkProduct,
                uncheckProducts
            ] 
        });
    }

    const addToCart = (id) => {
        let checkProduct = state.cartList.find(product => product.id === id )

        if (undefined !== checkProduct) {
            checkProductInCart(checkProduct)
            return
        }
    
        let result = state.products.find(product => {

            return product.id === id;
        })

        setState({
            ...state,
            cartCount: state.cartCount + 1,
            cartAmount: state.cartAmount + result.price,
            cartList: [
                ...state.cartList,
                result
            ],
        });
    }

    return (
        <div className="shop">
            <div className='cart'>
                <div className='cart-count'>Товаров в корзине: {state.cartCount} шт.</div>
                {/* 
                    выносим элемент cartList в отдельный компонент
                    данные передали с помощью props (list мы обозначили то что нужно в новом компоненте) 
                */}
                <CartList list={state.cartList} />
                <div className='cart-amount'>Итого: {state.cartAmount} руб.</div>
            </div>
            <div className='products'>
                {state.products.map (product => (
                    <Product addToCart={addToCart} id={product.id} name={product.name} price={product.price} img={product.img} />
                ))}
                
            </div>
        </div>
    );
}