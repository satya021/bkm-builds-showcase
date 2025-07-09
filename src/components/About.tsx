import { Award, Users, Target, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards and attention to detail.'
    },
    {
      icon: Users,
      title: 'Teamwork', 
      description: 'Our success is built on collaboration, bringing together skilled professionals to achieve common goals.'
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'Safety is our top priority, implementing rigorous protocols to protect our workers and communities.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and innovative solutions to deliver superior construction results.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              About <span className="text-primary">BKM Construction</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building India's infrastructure with integrity, innovation, and excellence for over 25 years.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Story */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Our Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1999, BKM Construction Private Limited has emerged as one of India's 
                  leading construction companies, specializing in building construction, road development, 
                  and railway infrastructure projects.
                </p>
                <p>
                  Our journey began with a simple vision: to build infrastructure that not only meets 
                  today's needs but also serves future generations. Over the years, we have successfully 
                  completed over 500 projects across 15 states, earning the trust of government bodies, 
                  private enterprises, and communities alike.
                </p>
                <p>
                  With a team of over 1,000 skilled professionals, including engineers, architects, 
                  project managers, and construction specialists, we bring decades of combined experience 
                  to every project we undertake.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Mission & Vision</h3>
              <div className="space-y-6">
                <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Our Mission</h4>
                  <p className="text-muted-foreground">
                    To deliver world-class construction solutions that exceed client expectations 
                    while contributing to India's infrastructure development and economic growth.
                  </p>
                </div>
                <div className="bg-construction-light/10 p-6 rounded-lg border-l-4 border-construction-light">
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Our Vision</h4>
                  <p className="text-muted-foreground">
                    To be India's most trusted and innovative construction company, setting new 
                    standards in quality, sustainability, and technological advancement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-construction transition-all duration-300 group">
                    <CardHeader>
                      <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <IconComponent className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;