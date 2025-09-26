import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { CartProvider } from '@/contexts/CartContext';
import { CartUIProvider } from '@/components/CartProvider';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';

// Pages
import Index from '@/pages/Index';
import About from '@/pages/About';
import ShippingCalculator from '@/pages/ShippingCalculator';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  console.log('App: Initializing application');

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <CartUIProvider>
          <Router>
            <EcommerceTemplate>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/shipping-calculator" element={<ShippingCalculator />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </EcommerceTemplate>
            <Toaster />
          </Router>
        </CartUIProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;