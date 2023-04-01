

export default function CartList (props) {

    return (
        <div className='cart-list'>
            {
            props.list.length > 0 ? 
                props.list.map(product => (
                    <div key={product.id} className='cart-list-item'>{product.name} {product.price} руб. {product.amount} шт.</div>               
                ))
                : 'Список пуст: сначала добавьте товары в корзину'
            }
        </div>
    )
}