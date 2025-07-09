import { ArrowRight, Building2, Navigation, Train, Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import buildingImage from '@/assets/building-construction.jpg';
import roadImage from '@/assets/road-construction.jpg';
import railImage from '@/assets/rail-construction.jpg';
import bridgeImage from '@/assets/bridge-construction.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Building Construction',
      description: 'Commercial and residential building projects with modern architecture and sustainable design principles.',
      image: buildingImage,
      icon: Building2,
      features: ['High-rise Buildings', 'Residential Complexes', 'Commercial Spaces', 'Sustainable Design']
    },
    {
      id: 2,
      title: 'Road Construction',
      description: 'Highway development, urban roads, and infrastructure projects connecting communities across the nation.',
      image: roadImage,
      icon: Navigation,
      features: ['Highway Development', 'Urban Roads', 'Traffic Systems', 'Road Maintenance']
    },
    {
      id: 3,
      title: 'Railway Infrastructure',
      description: 'Advanced railway construction including tracks, stations, and supporting infrastructure systems.',
      image: railImage,
      icon: Train,
      features: ['Railway Tracks', 'Station Development', 'Signal Systems', 'Maintenance Facilities']
    },
    {
      id: 4,
      title: 'Bridge Construction',
      description: 'Engineering excellence in bridge construction spanning rivers, valleys, and urban landscapes.',
      image: bridgeImage,
      icon: Construction,
      features: ['Highway Bridges', 'Railway Bridges', 'Pedestrian Bridges', 'Structural Engineering']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From towering skyscrapers to extensive highway networks, we deliver projects that 
            stand the test of time and serve communities for generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card key={project.id} className="group hover:shadow-construction transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 p-3 rounded-lg">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary-dark transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;