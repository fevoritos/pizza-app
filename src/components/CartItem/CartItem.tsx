import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";
import { CartItemProps } from "./CartItem.props";

function CartItem(props: CartItemProps) {
    const dispatch = useDispatch<AppDispatch>();

    const increase = () => {
        dispatch(cartActions.add(props.id));
    };

    const decrease = () => {
    };

    const remove = () => {
    };

    return (
        <div className={styles["item"]}>
            <div className={styles["image"]} style={{ backgroundImage: `url('${props.image}')` }}></div>
            <div className={styles["description"]}>
                <div className={styles["name"]}>{props.name}</div>
                <div className={styles["currncy"]}>{props.price}&nbsp;₽</div>
            </div>
            <div className={styles["actions"]}>
                <button className={styles["button"]} onClick={decrease}>
                    <img src="/cart-button-icon.svg" alt="Удалить из корзины" />
                </button>
                <div>{props.count}</div>
                <button className={styles["button"]} onClick={increase}>
                    <img src="/cart-button-icon.svg" alt="Добавить в корзину" />
                </button>
                <button className={styles["button"]} onClick={remove}>
                    <img src="/cart-button-icon.svg" alt="Удалить все" />
                </button>
            </div>
        </div>
    );
}


export default CartItem;