import React from 'react';
import { Clock, Shield, Zap, BarChart } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Reduce manual work by up to 80% with intelligent automation'
  },
  {
    icon: Shield,
    title: 'Error-Free Operations',
    description: 'Eliminate human errors and ensure consistent results'
  },
  {
    icon: Zap,
    title: 'Instant Deployment',
    description: 'Deploy automation workflows in minutes, not months'
  },
  {
    icon: BarChart,
    title: 'Performance Analytics',
    description: 'Track and optimize your automation performance'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Why Choose StreamHive?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}