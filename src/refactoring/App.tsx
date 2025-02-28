import { useState } from 'react';
import { CartPage } from './pages/CartPage.tsx';
import { AdminPage } from './pages/AdminPage.tsx';
import { useCoupons, useProducts } from './hooks';
import { initialCoupons } from './data/coupons.ts';
import { initialProducts } from './data/products.ts';
import Header from './components/Header.tsx';

const App = () => {
  const { products, updateProduct, addProduct } = useProducts(initialProducts);
  const { coupons, addCoupon } = useCoupons(initialCoupons);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <main className="container mx-auto mt-6">
        {isAdmin ? (
          <AdminPage
            products={products}
            coupons={coupons}
            onProductUpdate={updateProduct}
            onProductAdd={addProduct}
            onCouponAdd={addCoupon}
          />
        ) : (
          <CartPage products={products} coupons={coupons} />
        )}
      </main>
    </div>
  );
};

export default App;
