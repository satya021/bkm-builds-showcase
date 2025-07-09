import { useState } from 'react';
import { Calendar, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      title: 'Metro City Tower Complex',
      category: 'Building Construction',
      location: 'Mumbai, Maharashtra',
      year: '2023',
      duration: '18 months',
      team: '150+ workers',
      description: 'A 45-story mixed-use development featuring commercial offices, retail spaces, and luxury residences.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
      highlights: ['LEED Gold Certified', 'Smart Building Technology', 'Earthquake Resistant Design']
    },
    {
      id: 2,
      title: 'National Highway 44 Extension',
      category: 'Road Construction',
      location: 'Delhi to Agra',
      year: '2022',
      duration: '24 months',
      team: '300+ workers',
      description: 'Modern 6-lane highway construction with advanced traffic management systems and smart lighting.',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop',
      highlights: ['200 km Highway', 'Smart Traffic Systems', 'Environmental Compliance']
    },
    {
      id: 3,
      title: 'Regional Express Rail Line',
      category: 'Railway Infrastructure',
      location: 'Pune to Nashik',
      year: '2023',
      duration: '30 months',
      team: '400+ workers',
      description: 'High-speed rail connection with modern stations and advanced signaling systems.',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&h=600&fit=crop',
      highlights: ['150 km Rail Track', '8 Modern Stations', 'High-Speed Technology']
    },
    {
      id: 4,
      title: 'Coastal Bridge Project',
      category: 'Bridge Construction',
      location: 'Goa Coast',
      year: '2022',
      duration: '20 months',
      team: '200+ workers',
      description: 'Architectural marvel spanning 2.5 km across the coastal waters with scenic viewing points.',
      image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?w=800&h=600&fit=crop',
      highlights: ['2.5 km Span', 'Coastal Design', 'Tourist Viewpoints']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const currentItem = portfolioItems[currentSlide];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our successful projects that showcase engineering excellence, 
            innovative design, and commitment to quality construction.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-construction">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-96 lg:h-auto">
                <img 
                  src={currentItem.image} 
                  alt={currentItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {currentItem.category}
                  </Badge>
                </div>
              </div>

              {/* Content Section */}
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  {currentItem.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {currentItem.description}
                </p>

                {/* Project Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    {currentItem.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    {currentItem.year}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    {currentItem.team}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    {currentItem.duration}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-3 text-foreground">Key Highlights:</h4>
                  <div className="space-y-2">
                    {currentItem.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={prevSlide}
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={nextSlide}
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    {currentSlide + 1} of {portfolioItems.length}
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;