import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/mockData";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

// Backward-compatible props: supports either { product } or direct product fields (legacy)
export type ProductCardProps =
  | { product: Product }
  | (Product & { onAddToCart?: () => void });

const ProductCard = (props: ProductCardProps) => {
  const { addItem } = useCart();

  // Support both new and legacy API
  const product: Product | undefined = (props as any).product ?? (props as any);

  if (!product || !product.id) {
    // Defensive: avoid runtime crash if props are incorrect during transitions
    return null;
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    // Call legacy callback if provided
    if ((props as any).onAddToCart) {
      (props as any).onAddToCart();
    }
  };

  return (
    <Card className="group overflow-hidden border-border hover-lift">
      <Link to={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {product.isNew && (
            <Badge className="absolute top-3 right-3 bg-accent">New</Badge>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-primary">₹{product.price}</span>
          <Button 
            className="w-full" 
            size="sm"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
