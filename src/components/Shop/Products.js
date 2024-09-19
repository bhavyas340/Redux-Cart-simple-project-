import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMEY_PRODUTS=[
  {
    id: 'p1',
    price:6,
    title:"mY first Book",
    description: "The First book i wrote"
  },
  {
    id: 'p2',
    price:5,
    title:"mY Second Book",
    description: "The Second book i wrote"
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {DUMMEY_PRODUTS.map(product =>
        <ProductItem
        key={product.id}
        id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
