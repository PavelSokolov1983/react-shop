import {useState} from "react";
import "./Checkout.css";

export default function Checkout () {
    // 1. создать state и записываем в него все значения полей по умолчанию
    // 2. устанавливаем новое значение в state с помощью функции setStateValue

    const [state, setState] = useState ({
        fio: 'Павел',
        email: 'p.sokolov1983@gmail.com',
        address: 'г. Санкт-Петербург'
    }); 

    const setStateValue = (event) => {

        setState({
            ...state,
            [event.target.name]: event.target.value
        }); 
    } 

    const submitForm = () => {
        alert('Форма отправлена');
    }

    return (
        <div>
            <button className="checkout-button">Оформить заказ</button>
            <form className="checkout-form" onSubmit={submitForm}>
                <label>
                    <input name="fio" type="text" onChange={setStateValue} /> 
                    <span className="checkout-form-text">ФИО</span>
                </label>
                <label>
                    <input name="email" type="text" onChange={setStateValue} /> 
                    <span className="checkout-form-text">Электронный адрес</span>
                </label>
                <label>
                    <input name="address" type="text" onChange={setStateValue} /> 
                    <span className="checkout-form-text">Адрес отправки</span>
                </label>
                <input type="submit" value="Завершить оформление" />
            </form>
        </div>
    )
}