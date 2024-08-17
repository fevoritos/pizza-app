import ProductCard from "../../../components/ProductCard/ProductCard";
import { MenuListProps } from "./MenuList.props";

export function MenuList({ products }: MenuListProps) {
    return products.map(p => {
        return <ProductCard
            id={p.id}
            name={p.name}
            description={p.ingredients.join(", ")}
            rating={p.rating}
            price={p.price}
            image={p.image}

        />;
    });
}