import { Building2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-construction-dark text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/84ee773a-1e8f-4a3c-ae28-7b72964c8a88.png" 
                alt="BKM Construction" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              BKM Construction Private Limited - Building India's infrastructure with excellence, 
              innovation, and integrity for over 25 years.
            </p>
            <div className="flex items-center space-x-2 text-primary-foreground/80 mb-2">
              <Building2 className="h-4 w-4" />
              <span>500+ Projects Completed</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <MapPin className="h-4 w-4" />
              <span>15+ States Covered</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Building Construction</li>
              <li>Road Development</li>
              <li>Railway Infrastructure</li>
              <li>Bridge Construction</li>
              <li>Project Management</li>
              <li>Consulting Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>info@bkmconstruction.com</span>
              </div>
              <div className="flex items-start space-x-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-1" />
                <div>
                  <div>BKM Construction Pvt. Ltd.</div>
                  <div>Business District</div>
                  <div>Mumbai, Maharashtra</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © 2024 BKM Construction Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;