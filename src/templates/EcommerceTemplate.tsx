import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Heart, Phone, Mail } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import { Input } from '@/components/ui/input'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template específico para tienda de mascotas con header, footer y cart.
 * Diseño cálido y amigable para productos de animales.
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-white shadow-sm border-b border-pet-green/10 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-pet-green rounded-full p-2">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-pet-green">PetShop</h1>
                <p className="text-xs text-muted-foreground">Premium</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-foreground/70 hover:text-pet-green transition-colors font-medium"
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                className="text-foreground/70 hover:text-pet-green transition-colors font-medium"
              >
                Sobre Nosotros
              </Link>
              <Link 
                to="/shipping-calculator" 
                className="text-foreground/70 hover:text-pet-green transition-colors font-medium"
              >
                Calculadora de Envíos
              </Link>
              <Link 
                to="/blog" 
                className="text-foreground/70 hover:text-pet-green transition-colors font-medium"
              >
                Blog
              </Link>
              <a 
                href="tel:+1234567890" 
                className="text-foreground/70 hover:text-pet-green transition-colors font-medium flex items-center space-x-1"
              >
                <Phone className="h-4 w-4" />
                <span>Contacto</span>
              </a>
            </nav>
          </div>

          {/* Cart */}
          {showCart && (
            <Button
              variant="ghost"
              size="icon"
              onClick={openCart}
              className="relative hover:bg-pet-green/10"
            >
              <ShoppingCart className="h-5 w-5 text-pet-green" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-pet-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Button>
          )}
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-gray-900 text-white py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-pet-green rounded-full p-2">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">PetShop Premium</h3>
                <p className="text-sm text-gray-400">Tu tienda de confianza</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Más de 10 años cuidando la felicidad de tu mascota. 
              Productos de calidad premium, asesoría especializada y amor por los animales.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@petshop.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Navegación</h4>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Sobre Nosotros
              </Link>
              <Link 
                to="/shipping-calculator" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Calculadora de Envíos
              </Link>
              <Link 
                to="/blog" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Blog de Mascotas
              </Link>
              <a 
                href="#" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Síguenos</h4>
            <SocialLinks />
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Newsletter</p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="bg-gray-800 border-gray-700 text-white text-sm"
                />
                <Button 
                  size="sm" 
                  className="bg-pet-green hover:bg-pet-green/90"
                >
                  ✓
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2024 PetShop Premium. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Términos</a>
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Devoluciones</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}