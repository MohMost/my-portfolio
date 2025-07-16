import { Check, Globe, ShoppingCart, Bot, Server, Wrench } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  const services = [
    {
      category: "Website Development",
      icon: Globe,
      items: [
        {
          name: "Landing Page",
          description: "Simple design, contact form",
          price: "€300",
          priceUSD: "$340",
          features: [
            "1 page",
            "Contact form",
            "Responsive design",
            "Basic SEO",
          ],
        },
        {
          name: "Showcase Site",
          description: "Professional site, CMS WordPress, basic SEO",
          price: "€1,500",
          priceUSD: "$1,700",
          features: [
            "3-5 pages",
            "WordPress CMS",
            "Basic SEO",
            "Mobile responsive",
          ],
        },
        {
          name: "Complete Showcase Site",
          description: "Rich content, blog, light animations",
          price: "€3,000",
          priceUSD: "$3,400",
          features: [
            "5+ pages",
            "Blog functionality",
            "Animations",
            "Advanced features",
          ],
        },
      ],
    },
    {
      category: "E-commerce Solutions",
      icon: ShoppingCart,
      items: [
        {
          name: "Basic E-commerce",
          description: "Limited catalog, standard payment (CB, PayPal)",
          price: "€1,000",
          priceUSD: "$1,125",
          features: [
            "~10 products",
            "Payment integration",
            "Order management",
            "Basic analytics",
          ],
        },
        {
          name: "Advanced E-commerce",
          description: "Large store, multiple payment methods, integrations",
          price: "€4,000",
          priceUSD: "$4,500",
          features: [
            "50+ products",
            "Multiple payments",
            "Advanced features",
            "Integrations",
          ],
        },
      ],
    },
    {
      category: "Site Redesign & Enhancement",
      icon: Wrench,
      items: [
        {
          name: "Site Redesign",
          description: "Existing site redesign (design + SEO)",
          price: "€1,000",
          priceUSD: "$1,125",
          features: [
            "Complete redesign",
            "SEO optimization",
            "Performance boost",
            "Modern design",
          ],
        },
        {
          name: "Redesign + Advanced Features",
          description: "Redesign + new custom modules",
          price: "€3,000",
          priceUSD: "$3,375",
          features: [
            "Full redesign",
            "Custom modules",
            "Advanced functionality",
            "Performance optimization",
          ],
        },
      ],
    },
    {
      category: "AI & Chatbot Integration",
      icon: Bot,
      items: [
        {
          name: "Basic Chatbot",
          description: "Simple scripted chatbot, plugin installation",
          price: "€150",
          priceUSD: "$170",
          features: [
            "Simple responses",
            "Plugin installation",
            "Basic customization",
            "Setup support",
          ],
        },
        {
          name: "Advanced AI Chatbot",
          description: "AI chatbot (ex. GPT), learning, complex scenarios",
          price: "€500",
          priceUSD: "$560",
          features: [
            "AI-powered",
            "Learning capabilities",
            "Complex scenarios",
            "Custom training",
          ],
        },
      ],
    },
    {
      category: "Hosting & Maintenance",
      icon: Server,
      items: [
        {
          name: "Shared Hosting",
          description: "Hosting + domain name (12 months)",
          price: "€120/year",
          priceUSD: "$135/year",
          features: [
            "Domain included",
            "SSL certificate",
            "Email accounts",
            "24/7 support",
          ],
          badge: "€10/month",
        },
        {
          name: "WordPress Maintenance",
          description: "Daily updates, backups, basic support",
          price: "€30/month",
          priceUSD: "$34/month",
          features: [
            "Daily updates",
            "Regular backups",
            "Security monitoring",
            "Basic support",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services & Pricing
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional web development services with transparent pricing.
            Choose the perfect solution for your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-slate-900 text-white rounded-lg">
                  <category.icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  {category.category}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service, serviceIndex) => (
                  <Card
                    key={serviceIndex}
                    className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                            {service.name}
                          </CardTitle>
                          {service.badge && (
                            <Badge variant="secondary" className="mb-2">
                              {service.badge}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CardDescription className="text-slate-600 text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-slate-900">
                            {service.price}
                          </span>
                          <span className="text-lg text-slate-500">
                            {service.priceUSD}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-3"
                          >
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-slate-700">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-slate-900 text-white rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote tailored
            to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-slate-900 hover:bg-slate-100"
            >
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
