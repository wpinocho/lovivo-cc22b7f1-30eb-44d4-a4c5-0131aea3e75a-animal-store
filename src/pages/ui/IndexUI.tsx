import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Heart, Shield, Truck, Star } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Interfaz completamente editable para la tienda de mascotas.
 * Diseño cálido y amigable enfocado en productos para animales.
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    blogs,
    loading,
    loadingCollections,
    loadingBlogs,
    searchTerm,
    selectedCollectionId,
    filteredProducts,
    setSearchTerm,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section */}
      <section className="pet-gradient py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg">
              <Heart className="h-12 w-12 text-pet-green animate-bounce-gentle" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-foreground mb-4">
            🐾 <span className="text-pet-green">PetShop</span> Premium
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Todo lo que tu mascota necesita para ser feliz y saludable. 
            Productos de calidad premium con envío rápido y atención especializada.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              type="text" 
              placeholder="Buscar productos para tu mascota..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="pl-10 bg-white/90 backdrop-blur-sm border-pet-green/20 focus:border-pet-green"
            />
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 bg-white/60 backdrop-blur-sm rounded-lg p-4">
              <Shield className="h-5 w-5 text-pet-green" />
              <span className="text-sm font-medium text-foreground">Productos Garantizados</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/60 backdrop-blur-sm rounded-lg p-4">
              <Truck className="h-5 w-5 text-pet-orange" />
              <span className="text-sm font-medium text-foreground">Envío Gratis +$50</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/60 backdrop-blur-sm rounded-lg p-4">
              <Star className="h-5 w-5 text-pet-blue" />
              <span className="text-sm font-medium text-foreground">Asesoría Veterinaria</span>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Compra por Categoría
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Encuentra exactamente lo que necesitas para tu compañero peludo, emplumado o escamoso
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <div key={collection.id} className="pet-card-hover">
                  <CollectionCard 
                    collection={collection} 
                    onViewProducts={handleViewCollectionProducts} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Productos'}` 
                  : 'Productos Destacados'
                }
              </h2>
              <p className="text-muted-foreground">
                {selectedCollectionId 
                  ? 'Productos especializados para tu mascota'
                  : 'Los favoritos de nuestros clientes y sus mascotas'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="border-pet-green text-pet-green hover:bg-pet-green hover:text-white"
              >
                Ver Todos los Productos
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg h-96 animate-pulse shadow-sm"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="pet-card-hover">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white rounded-full p-6 w-24 h-24 mx-auto mb-6 shadow-sm">
                <Heart className="h-12 w-12 text-muted-foreground mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {searchTerm 
                  ? 'No encontramos productos' 
                  : 'No hay productos disponibles'
                }
              </h3>
              <p className="text-muted-foreground mb-6">
                {searchTerm 
                  ? 'Intenta con otros términos de búsqueda o explora nuestras categorías' 
                  : 'Pronto tendremos más productos para tu mascota'
                }
              </p>
              {searchTerm && (
                <Button 
                  variant="outline" 
                  onClick={() => setSearchTerm('')}
                  className="border-pet-green text-pet-green hover:bg-pet-green hover:text-white"
                >
                  Limpiar Búsqueda
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-pet-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            🎉 Únete a la Familia PetShop
          </h2>
          <p className="text-xl text-pet-green-light mb-8">
            Recibe consejos de cuidado, ofertas exclusivas y novedades para tu mascota
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="tu@email.com" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white"
            />
            <Button 
              className="bg-pet-orange hover:bg-pet-orange/90 text-white font-semibold px-8"
            >
              Suscribirse
            </Button>
          </div>
          <p className="text-sm text-pet-green-light mt-4">
            * No spam, solo amor por las mascotas 🐕🐱
          </p>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};