import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductLayout from '../components/ProductLayout';
import Footer from '../components/Footer';

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <Header />
      <Hero />
      <ProductLayout products={products} />
      <Footer />
    </main>
  );
}
