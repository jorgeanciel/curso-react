import ProductCard from "../components/ProductCard";

const product = {
  id: "1",
  title: "coffee Mug-1",
  img: "./coffee-mug.png",
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>shopping page</h1>
      <hr />
      <ProductCard product={product} />
    </div>
  );
};

export default ShoppingPage;
