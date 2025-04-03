import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { lazy, Suspense } from 'react';



const App = lazy(() => import("./App.jsx"));
const Home = lazy(() => import("./page/Home.jsx"));
const NotFound = lazy(() => import("./components/NotFound/NotFound.jsx"));
const ProductList = lazy(() => import("./components/ProductList/ProductList.jsx"));
const Cart = lazy(() => import("./components/Cart/Cart.jsx"));
const ProductDetail = lazy(() => import("./components/ProductDetail/ProductDetail.jsx"));
const Checkout = lazy(() => import("./page/Checkout/Checkout.jsx"));
const Spinner = lazy(() => import("./components/Spinner/Spinner.jsx"));

const router = createBrowserRouter([
  {
      path:'/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/product',
          element: <ProductList />,
        },
        {
          path: '/products/:category',
          element: <ProductList />,
        },
        {
          path: '/product/:id',
          element: <ProductDetail />
        },
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '/checkout',
          element: <Checkout />
        }
      ]
  }
]);


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
     <RouterProvider router={router} />
    </Suspense>
  </Provider>
)
