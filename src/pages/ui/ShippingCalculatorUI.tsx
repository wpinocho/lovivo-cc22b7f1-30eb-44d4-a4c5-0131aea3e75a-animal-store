import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Truck, 
  Zap, 
  Crown, 
  Gift, 
  Package, 
  MapPin, 
  Weight,
  Calculator,
  CheckCircle,
  Loader2
} from 'lucide-react';

/**
 * UI COMPONENT - ShippingCalculatorUI
 * 
 * Interfaz de usuario para la calculadora de envíos
 */

interface ShippingCalculatorUIProps {
  logic: {
    postalCode: string;
    setPostalCode: (code: string) => void;
    weight: number;
    setWeight: (weight: number) => void;
    shippingOptions: Array<{
      id: string;
      name: string;
      description: string;
      price: number;
      estimatedDays: string;
      icon: string;
    }>;
    isCalculating: boolean;
    hasCalculated: boolean;
    calculateShipping: () => void;
    resetCalculation: () => void;
  };
}

const iconMap = {
  truck: Truck,
  zap: Zap,
  crown: Crown,
  gift: Gift
};

export const ShippingCalculatorUI = ({ logic }: ShippingCalculatorUIProps) => {
  console.log('ShippingCalculatorUI: Rendering shipping calculator');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="bg-pet-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calculator className="h-8 w-8 text-pet-green" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Calculadora de Envíos
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Calcula el costo de envío para tu pedido. Ingresa tu código postal y el peso aproximado 
          de tu compra para ver todas las opciones disponibles.
        </p>
      </div>

      {/* Calculator Form */}
      <Card className="border-pet-green/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Package className="h-5 w-5 text-pet-green" />
            <span>Información del Envío</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="postalCode" className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-pet-green" />
                <span>Código Postal</span>
              </Label>
              <Input
                id="postalCode"
                type="text"
                placeholder="Ej: 12345"
                value={logic.postalCode}
                onChange={(e) => logic.setPostalCode(e.target.value)}
                className="border-pet-green/20 focus:border-pet-green"
                maxLength={5}
              />
              <p className="text-xs text-muted-foreground">
                Ingresa tu código postal de 5 dígitos
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight" className="flex items-center space-x-2">
                <Weight className="h-4 w-4 text-pet-green" />
                <span>Peso Aproximado (kg)</span>
              </Label>
              <Input
                id="weight"
                type="number"
                min="0.1"
                step="0.1"
                placeholder="1.0"
                value={logic.weight}
                onChange={(e) => logic.setWeight(parseFloat(e.target.value) || 0)}
                className="border-pet-green/20 focus:border-pet-green"
              />
              <p className="text-xs text-muted-foreground">
                Peso total de tu pedido en kilogramos
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button 
              onClick={logic.calculateShipping}
              disabled={!logic.postalCode || logic.weight <= 0 || logic.isCalculating}
              className="bg-pet-green hover:bg-pet-green/90 flex-1"
            >
              {logic.isCalculating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Calculando...
                </>
              ) : (
                <>
                  <Calculator className="h-4 w-4 mr-2" />
                  Calcular Envío
                </>
              )}
            </Button>
            
            {logic.hasCalculated && (
              <Button 
                variant="outline" 
                onClick={logic.resetCalculation}
                className="border-pet-green/20 text-pet-green hover:bg-pet-green/10"
              >
                Limpiar
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Shipping Options */}
      {logic.hasCalculated && logic.shippingOptions.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-pet-green">
            <CheckCircle className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Opciones de Envío Disponibles</h2>
          </div>
          
          <div className="grid gap-4">
            {logic.shippingOptions.map((option) => {
              const IconComponent = iconMap[option.icon as keyof typeof iconMap];
              return (
                <Card key={option.id} className="border-pet-green/20 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-pet-green/10 p-3 rounded-full">
                          <IconComponent className="h-6 w-6 text-pet-green" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground flex items-center space-x-2">
                            <span>{option.name}</span>
                            {option.price === 0 && (
                              <Badge className="bg-pet-orange text-white">
                                ¡GRATIS!
                              </Badge>
                            )}
                          </h3>
                          <p className="text-sm text-muted-foreground">{option.description}</p>
                          <p className="text-sm text-pet-green font-medium">
                            Entrega: {option.estimatedDays}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-foreground">
                          {option.price === 0 ? 'GRATIS' : `$${option.price}`}
                        </div>
                        {option.price > 0 && (
                          <div className="text-sm text-muted-foreground">MXN</div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Info Section */}
      <Card className="bg-pet-green-light/30 border-pet-green/20">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-foreground mb-4">Información Importante</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <h4 className="font-medium text-foreground mb-2">Tiempos de Entrega</h4>
              <ul className="space-y-1">
                <li>• Los tiempos son días hábiles (Lun-Vie)</li>
                <li>• Envíos procesados en 24-48 horas</li>
                <li>• Zonas remotas pueden tomar días adicionales</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Políticas de Envío</h4>
              <ul className="space-y-1">
                <li>• Envío gratis en pedidos mayores a 10kg</li>
                <li>• Seguro incluido en todos los envíos</li>
                <li>• Rastreo disponible para todos los pedidos</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};