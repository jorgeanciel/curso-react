import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import noImage from "../assets/no-image.jpg";

interface Props {
  product: Product;
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

const ProductCard = ({ product }: Props) => {
  const { count, increaseBy } = useProduct();
  return (
    <div className={styles.productCard}>
      <img
        src={product.img ? product.img : noImage}
        alt="Cofee Mug"
        className={styles.productImg}
      />
      <span className={styles.productDescription}>{product.title}</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          {" "}
          -{" "}
        </button>

        <div className={styles.countLabel}>{count}</div>

        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
