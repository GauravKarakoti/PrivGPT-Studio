"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out PrivGPT Studio.",
      features: [
        "Access to basic local models",
        "Limited cloud model usage",
        "Community support",
        "Basic privacy features",
      ],
      cta: "Get Started",
      variant: "outline" as const,
      popular: false,
    },
    {
      name: "Basic",
      price: "$9",
      period: "/mo",
      description: "For individuals who need more power.",
      features: [
        "Access to advanced local models",
        "Increased cloud model usage",
        "Priority support",
        "Advanced privacy settings",
        "Custom system prompts",
      ],
      cta: "Subscribe Now",
      variant: "default" as const,
      popular: true,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mo",
      description: "For power users and professionals.",
      features: [
        "Unlimited local model access",
        "High-tier cloud model usage",
        "24/7 Premium support",
        "Enterprise-grade privacy",
        "API access",
        "Early access to new features",
      ],
      cta: "Go Pro",
      variant: "outline" as const,
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-20 px-4 animate-in fade-in duration-500">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="mb-4">
            Flexible Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock the full potential of PrivGPT Studio. Switch between cloud and local AI models seamlessly with a plan that fits you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`
                relative flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                ${plan.popular 
                  ? 'border-primary shadow-md md:-mt-8 md:mb-8 z-10 scale-105' 
                  : 'hover:border-primary/50'}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <Badge className="bg-primary text-primary-foreground hover:bg-primary px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6 flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="bg-primary/10 rounded-full p-1">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full" variant={plan.variant} size="lg">
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}