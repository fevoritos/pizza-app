import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./Success.module.css";

export function Success() {
    const navigate = useNavigate();
    return (
        <div className={styles["success"]}>
            <img src="/pizza2.png" alt="Изображение пиццы" />
            <div className={styles["text"]}>Ваш заказ успешно оформлен!</div>
            <Button appearance="big" onClick={() => navigate("/")}>Сделать новый</Button>
        </div>
    );
}