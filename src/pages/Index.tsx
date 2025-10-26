import { Link } from "react-router-dom";
import { Star, ChefHat, Award, Heart } from "lucide-react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products, testimonials } from "@/lib/mockData";

const Index = () => {
  const featuredProducts = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Discover Our <span className="text-accent">Flavours</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handpicked selections from our artisan kitchen, crafted with passion and the
            finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why Choose <span className="text-accent">Zaika Toast</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover-lift border-border">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <ChefHat className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Bakers</h3>
                <p className="text-muted-foreground">
                  Our master bakers bring years of experience and passion to every creation
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover-lift border-border">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Only the finest, freshest ingredients make it into our recipes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover-lift border-border">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
                <p className="text-muted-foreground">
                  Every product is baked fresh daily with care and attention to detail
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Customer <span className="text-accent">Love</span>
          </h2>
          <p className="text-muted-foreground">What our happy customers say about us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover-lift border-border">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to Indulge?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Order your favorite treats today and experience the taste of artisanal perfection
          </p>
          <Link to="/products">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Start Shopping
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
