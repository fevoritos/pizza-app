import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { IProduct } from "../../interfaces/product.interface";
import { Suspense } from "react";
import Headling from "../../components/Headling/Headling";
import Button from "../../components/Button/Button";
import styles from "./Product.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";

export function Product() {
    const data = useLoaderData() as { data: IProduct };
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();


    return <>
        <Suspense fallback={"Загружаю..."}>
            <Await resolve={data.data}>
                {({ data }: { data: IProduct }) => (
                    <>
                        <div className={styles["head"]}>
                            <button className={styles["back_button"]} onClick={() => navigate("/")}>
                                <img src="/back.svg" alt="Вернуться в меню" />
                            </button>
                            <Headling className={styles["headling"]}>{data.name}</Headling>
                            <Button className={styles["cart_button"]} onClick={(e) => {
                                e.preventDefault();
                                dispatch(cartActions.add(data.id));
                            }} appearance="small">
                                <img src="/cart-button-icon.svg" alt="Иконка корзины" />
                                В корзину
                            </Button>
                        </div>
                        <div className={styles["wrapper"]}>
                            <div className={styles["image"]} style={{ backgroundImage: `url('${data.image}')` }}></div>
                            <div className={styles["description"]}>
                                <div className={styles["line"]}>
                                    <div className={styles["text"]}>Цена</div>
                                    <div className={styles["price"]}>{data.price}&nbsp;<span>₽</span></div>
                                </div>
                                <hr className={styles["hr"]} />
                                <div className={styles["rating_wrapper"]}>
                                    Рейтинг
                                    <div className={styles["rating"]}>
                                        {data.rating}&nbsp;
                                        <img src="/star-icon.svg" alt="Иконка звезды" />
                                    </div>
                                </div>
                                <ul className={styles["ul"]}>Состав:
                                    {data.ingredients.map((i => <li className={styles["li"]} key={i}>{i.charAt(0).toUpperCase() + i.slice(1)}</li>))}
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </Await>
        </Suspense>
    </>;
}
