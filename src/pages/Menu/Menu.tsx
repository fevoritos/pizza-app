import { useEffect, useState } from "react";
import Headling from "../../components/Headling/Headling";
import Search from "../../components/Search/Search";
import { PRFIX } from "../../helpers/API";
import { Product } from "../../interfaces/product.interface";
import styles from "./Menu.module.css";
import axios, { AxiosError } from "axios";
import { MenuList } from "./MenuList/MenuList";

export function Menu() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsloading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>();

    const getMenu = async () => {
        try {
            setIsloading(true);
            // await new Promise<void>((resolve) => {
            //     setTimeout(() => {
            //         resolve();
            //     }, 2000);
            // });
            const { data } = await axios.get<Product[]>(`${PRFIX}/products`);
            setProducts(data);
            setIsloading(false);
        } catch (e) {
            console.error(e);
            if (e instanceof AxiosError) {
                setError(e.message);
            }
            setIsloading(false);
            return;
        }
    };

    useEffect(() => {
        getMenu();
    }, []);


    return <>
        <div className={styles["head"]}>
            <Headling>Меню</Headling>
            <Search placeholder="Введите блюдо или состав" />
        </div>
        <div>
            {error && <>{error}</>}
            {!isLoading && <MenuList products={products} />}
            {isLoading && <>Загржаем продукты...</>}
        </div>
    </>;
}
