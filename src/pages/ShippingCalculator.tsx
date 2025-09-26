import { HeadlessShippingCalculator } from '@/components/headless/HeadlessShippingCalculator';
import { ShippingCalculatorUI } from '@/pages/ui/ShippingCalculatorUI';

/**
 * ROUTE COMPONENT - ShippingCalculator
 * 
 * Página de calculadora de envíos que conecta HeadlessShippingCalculator con ShippingCalculatorUI
 */

const ShippingCalculator = () => {
  return (
    <HeadlessShippingCalculator>
      {(logic) => <ShippingCalculatorUI logic={logic} />}
    </HeadlessShippingCalculator>
  );
};

export default ShippingCalculator;