import './Products.css';
import SectionTitle from '../ui/SectionTitle';
import ProductCard from '../ui/ProductCard';
import productsData from '../../data/products.json';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Products() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="products" className="section section--alt products">
      <div className="container">
        <SectionTitle
          marathi="आमची उत्पादने"
          english="Our Products"
        />

        <div
          ref={ref}
          className={`products__grid stagger-children ${isVisible ? 'visible' : ''}`}
        >
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
