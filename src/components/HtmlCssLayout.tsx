import { useState, useEffect } from 'react';
import { Menu, X, Building2, Users, Award, MapPin, Calendar, ArrowRight, Phone, Mail, User } from 'lucide-react';
import buildingImage from '@/assets/building-construction.jpg';
import roadImage from '@/assets/road-construction.jpg';
import railImage from '@/assets/rail-construction.jpg';
import bridgeImage from '@/assets/bridge-construction.jpg';
import ChatSupport from '@/components/ChatSupport';
import './HtmlCssLayout.css';

const HtmlCssLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Building Construction',
      description: 'Commercial and residential building projects with modern architecture and sustainable design principles.',
      image: buildingImage,
      features: ['High-rise Buildings', 'Residential Complexes', 'Commercial Spaces', 'Sustainable Design']
    },
    {
      id: 2,
      title: 'Road Construction',
      description: 'Highway development, urban roads, and infrastructure projects connecting communities across the nation.',
      image: roadImage,
      features: ['Highway Development', 'Urban Roads', 'Traffic Systems', 'Road Maintenance']
    },
    {
      id: 3,
      title: 'Railway Infrastructure',
      description: 'Advanced railway construction including tracks, stations, and supporting infrastructure systems.',
      image: railImage,
      features: ['Railway Tracks', 'Station Development', 'Signal Systems', 'Maintenance Facilities']
    },
    {
      id: 4,
      title: 'Bridge Construction',
      description: 'Engineering excellence in bridge construction spanning rivers, valleys, and urban landscapes.',
      image: bridgeImage,
      features: ['Highway Bridges', 'Railway Bridges', 'Pedestrian Bridges', 'Structural Engineering']
    }
  ];

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

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const currentPortfolioItem = portfolioItems[currentProject];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img 
                src="/lovable-uploads/84ee773a-1e8f-4a3c-ae28-7b72964c8a88.png" 
                alt="BKM Construction" 
              />
            </div>

            <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#portfolio" className="nav-link" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>

            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-title">
              Building Tomorrow's
              <span className="text-primary"> Infrastructure</span>
            </h1>
            
            <p className="hero-subtitle">
              BKM Construction delivers excellence in building construction, road development, 
              and railway infrastructure with over two decades of industry expertise.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View Our Projects
                <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Get Quote
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <Building2 className="stat-icon" />
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <MapPin className="stat-icon" />
                <div className="stat-number">15+</div>
                <div className="stat-label">States Covered</div>
              </div>
              <div className="stat-item">
                <Award className="stat-icon" />
                <div className="stat-number">25+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2 className="section-title">
              Our <span className="text-primary">Projects</span>
            </h2>
            <p className="section-subtitle">
              From towering skyscrapers to extensive highway networks, we deliver projects that 
              stand the test of time and serve communities for generations.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.id} className={`project-card fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-icon">
                    <Building2 size={20} />
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <div className="feature-dot"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="btn btn-primary">
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2 className="section-title">
              Our <span className="text-primary">Portfolio</span>
            </h2>
            <p className="section-subtitle">
              Discover our successful projects that showcase engineering excellence, 
              innovative design, and commitment to quality construction.
            </p>
          </div>

          <div className="portfolio-showcase fade-in-up">
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={currentPortfolioItem.image} alt={currentPortfolioItem.title} />
                <div className="portfolio-badge">
                  {currentPortfolioItem.category}
                </div>
              </div>

              <div className="portfolio-info">
                <h3 className="portfolio-title">{currentPortfolioItem.title}</h3>
                <p className="portfolio-description">{currentPortfolioItem.description}</p>

                <div className="portfolio-details">
                  <div className="detail-item">
                    <MapPin className="detail-icon" />
                    {currentPortfolioItem.location}
                  </div>
                  <div className="detail-item">
                    <Calendar className="detail-icon" />
                    {currentPortfolioItem.year}
                  </div>
                  <div className="detail-item">
                    <Users className="detail-icon" />
                    {currentPortfolioItem.team}
                  </div>
                  <div className="detail-item">
                    <Calendar className="detail-icon" />
                    {currentPortfolioItem.duration}
                  </div>
                </div>

                <div className="portfolio-highlights">
                  <h4 className="highlights-title">Key Highlights:</h4>
                  {currentPortfolioItem.highlights.map((highlight, index) => (
                    <div key={index} className="highlight-item">
                      <div className="highlight-dot"></div>
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="portfolio-navigation">
                  <div className="nav-buttons">
                    <button className="nav-btn" onClick={prevProject} aria-label="Previous project">
                      ←
                    </button>
                    <button className="nav-btn" onClick={nextProject} aria-label="Next project">
                      →
                    </button>
                  </div>
                  
                  <div className="portfolio-counter">
                    {currentProject + 1} of {portfolioItems.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2 className="section-title">
              About <span className="text-primary">BKM Construction</span>
            </h2>
            <p className="section-subtitle">
              Building India's infrastructure with integrity, innovation, and excellence for over 25 years.
            </p>
          </div>

          <div className="about-content">
            <div className="about-text fade-in-left">
              <h3 className="about-section-title">Our Story</h3>
              <p className="about-paragraph">
                Founded in 1999, BKM Construction Private Limited has emerged as one of India's 
                leading construction companies, specializing in building construction, road development, 
                and railway infrastructure projects.
              </p>
              <p className="about-paragraph">
                Our journey began with a simple vision: to build infrastructure that not only meets 
                today's needs but also serves future generations. Over the years, we have successfully 
                completed over 500 projects across 15 states.
              </p>
              <p className="about-paragraph">
                With a team of over 1,000 skilled professionals, we bring decades of combined experience 
                to every project we undertake.
              </p>
            </div>

            <div className="mission-vision fade-in-right">
              <h3 className="about-section-title">Mission & Vision</h3>
              <div className="mission-card">
                <h4 className="card-title">Our Mission</h4>
                <p className="card-text">
                  To deliver world-class construction solutions that exceed client expectations 
                  while contributing to India's infrastructure development and economic growth.
                </p>
              </div>
              <div className="vision-card">
                <h4 className="card-title">Our Vision</h4>
                <p className="card-text">
                  To be India's most trusted and innovative construction company, setting new 
                  standards in quality, sustainability, and technological advancement.
                </p>
              </div>
            </div>
          </div>

          <div className="fade-in-up">
            <h3 className="about-section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Core Values</h3>
            <div className="values-grid">
              {[
                { icon: Award, title: 'Excellence', description: 'We strive for perfection in every project, ensuring the highest quality standards.' },
                { icon: Users, title: 'Teamwork', description: 'Our success is built on collaboration and skilled professionals working together.' },
                { icon: Building2, title: 'Safety', description: 'Safety is our top priority, implementing rigorous protocols for all projects.' },
                { icon: MapPin, title: 'Innovation', description: 'We embrace cutting-edge technology and innovative construction solutions.' }
              ].map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <value.icon size={24} />
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2 className="section-title">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="section-subtitle">
              Ready to start your next construction project? Contact us today for a free consultation 
              and let's build something extraordinary together.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info fade-in-left">
              <h3 className="contact-info-title">Contact Information</h3>
              
              <div className="contact-card">
                <div className="contact-card-content">
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <p>Call us for immediate assistance</p>
                    <ul className="contact-details-list">
                      <li>+91 98765 43210</li>
                      <li>+91 98765 43211</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-content">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>Send us your project requirements</p>
                    <ul className="contact-details-list">
                      <li>info@bkmconstruction.com</li>
                      <li>projects@bkmconstruction.com</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-content">
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-details">
                    <h4>Head Office</h4>
                    <p>Visit our corporate headquarters</p>
                    <div className="footer-address">
                      <div>BKM Construction Pvt. Ltd.</div>
                      <div>Business District</div>
                      <div>Mumbai, Maharashtra</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-card fade-in-right">
              <h3 className="form-title">Send Us a Message</h3>
              <form>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-input" placeholder="Enter your first name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-input" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="form-group full-width">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" placeholder="Enter your email address" />
                </div>
                
                <div className="form-group full-width">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" placeholder="Enter your phone number" />
                </div>
                
                <div className="form-group full-width">
                  <label className="form-label">Project Type</label>
                  <select className="form-select">
                    <option value="">Select project type</option>
                    <option value="building">Building Construction</option>
                    <option value="road">Road Construction</option>
                    <option value="railway">Railway Infrastructure</option>
                    <option value="bridge">Bridge Construction</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group full-width">
                  <label className="form-label">Message</label>
                  <textarea 
                    className="form-textarea" 
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-company">
              <img 
                src="/lovable-uploads/84ee773a-1e8f-4a3c-ae28-7b72964c8a88.png" 
                alt="BKM Construction" 
                className="footer-logo"
              />
              <p className="footer-description">
                BKM Construction Private Limited - Building India's infrastructure with excellence, 
                innovation, and integrity for over 25 years.
              </p>
              <div className="footer-stat">
                <Building2 className="footer-stat-icon" />
                <span>500+ Projects Completed</span>
              </div>
              <div className="footer-stat">
                <MapPin className="footer-stat-icon" />
                <span>15+ States Covered</span>
              </div>
            </div>

            <div className="footer-section">
              <h3>Our Services</h3>
              <ul className="footer-list">
                <li><a href="#projects">Building Construction</a></li>
                <li><a href="#projects">Road Development</a></li>
                <li><a href="#projects">Railway Infrastructure</a></li>
                <li><a href="#projects">Bridge Construction</a></li>
                <li><a href="#about">Project Management</a></li>
                <li><a href="#contact">Consulting Services</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Us</h3>
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <span>+91 98765 43210</span>
              </div>
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <span>info@bkmconstruction.com</span>
              </div>
              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <div className="footer-address">
                  <div>BKM Construction Pvt. Ltd.</div>
                  <div>Business District</div>
                  <div>Mumbai, Maharashtra</div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2024 BKM Construction Pvt. Ltd. All rights reserved.
            </div>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#careers">Careers</a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Chat Support */}
      <ChatSupport />
    </div>
  );
};

export default HtmlCssLayout;