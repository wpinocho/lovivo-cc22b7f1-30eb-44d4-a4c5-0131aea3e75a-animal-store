import { ReactNode, useState } from 'react';

/**
 * HEADLESS COMPONENT - HeadlessShippingCalculator
 * 
 * Lógica de negocio para la calculadora de envíos
 */

interface ShippingOption {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: string;
  icon: string;
}

interface ShippingCalculatorLogic {
  postalCode: string;
  setPostalCode: (code: string) => void;
  weight: number;
  setWeight: (weight: number) => void;
  shippingOptions: ShippingOption[];
  isCalculating: boolean;
  hasCalculated: boolean;
  calculateShipping: () => void;
  resetCalculation: () => void;
}

interface HeadlessShippingCalculatorProps {
  children: (logic: ShippingCalculatorLogic) => ReactNode;
}

export const HeadlessShippingCalculator = ({ children }: HeadlessShippingCalculatorProps) => {
  console.log('HeadlessShippingCalculator: Initializing shipping calculator logic');

  const [postalCode, setPostalCode] = useState('');
  const [weight, setWeight] = useState(1);
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);

  const calculateShipping = () => {
    console.log('HeadlessShippingCalculator: Calculating shipping for', { postalCode, weight });
    
    if (!postalCode || weight <= 0) {
      console.warn('HeadlessShippingCalculator: Invalid input data');
      return;
    }

    setIsCalculating(true);
    
    // Simular cálculo de envío
    setTimeout(() => {
      const basePrice = weight * 2.5;
      const isRemoteArea = postalCode.startsWith('9') || postalCode.startsWith('8');
      const multiplier = isRemoteArea ? 1.5 : 1;

      const options: ShippingOption[] = [
        {
          id: 'standard',
          name: 'Envío Estándar',
          description: 'Entrega en días hábiles',
          price: Math.round(basePrice * multiplier),
          estimatedDays: isRemoteArea ? '5-7 días' : '3-5 días',
          icon: 'truck'
        },
        {
          id: 'express',
          name: 'Envío Express',
          description: 'Entrega rápida garantizada',
          price: Math.round(basePrice * multiplier * 1.8),
          estimatedDays: isRemoteArea ? '2-3 días' : '1-2 días',
          icon: 'zap'
        },
        {
          id: 'premium',
          name: 'Envío Premium',
          description: 'Entrega al día siguiente',
          price: Math.round(basePrice * multiplier * 2.5),
          estimatedDays: 'Siguiente día hábil',
          icon: 'crown'
        }
      ];

      // Envío gratis para pedidos grandes
      if (weight > 10) {
        options.unshift({
          id: 'free',
          name: 'Envío Gratis',
          description: 'Por compras mayores a 10kg',
          price: 0,
          estimatedDays: '4-6 días',
          icon: 'gift'
        });
      }

      setShippingOptions(options);
      setIsCalculating(false);
      setHasCalculated(true);
      
      console.log('HeadlessShippingCalculator: Shipping calculated', options);
    }, 1500);
  };

  const resetCalculation = () => {
    console.log('HeadlessShippingCalculator: Resetting calculation');
    setShippingOptions([]);
    setHasCalculated(false);
    setPostalCode('');
    setWeight(1);
  };

  const logic: ShippingCalculatorLogic = {
    postalCode,
    setPostalCode,
    weight,
    setWeight,
    shippingOptions,
    isCalculating,
    hasCalculated,
    calculateShipping,
    resetCalculation
  };

  console.log('HeadlessShippingCalculator: Logic prepared', logic);

  return <>{children(logic)}</>;
};