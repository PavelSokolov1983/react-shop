export default function Product(props) {
    return (
        <div key={props.id} className='product'>
            <img src='#' alt={props.name} />
            <h3>{props.name}</h3>
            <div className='product-price'>{props.price}</div>
            <button onClick={() => props.addToCart(props.id)} className='add-to-cart-button'>Добавить в корзину</button>            
        </div>
        
    );
}