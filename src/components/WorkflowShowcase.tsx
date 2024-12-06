import React from 'react';
import { ArrowRight } from 'lucide-react';

const workflows = [
  {
    title: 'Video Transformation',
    description: 'Turn any video into engaging written content for Linkedin or X.',
    image: 'https://raw.githubusercontent.com/thecloudstation/n8n-workflows/refs/heads/main/workflows/images/content-generator.png'
  },
  {
    title: 'Lead Magnet',
    description: 'Use n8n and NocoDB to craft a powerful lead magnet in no time.',
    image: 'https://raw.githubusercontent.com/thecloudstation/n8n-workflows/refs/heads/main/workflows/images/hot-leads.png'
  },
  {
    title: 'Lead Blast',
    description: 'Unlock massive lead generation with a single strategic Slack post.',
    image: 'https://raw.githubusercontent.com/thecloudstation/n8n-workflows/refs/heads/main/workflows/images/linkedin-leads.png'
  }
];

export function WorkflowShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Our Automation Workflows</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Discover our powerful automation solutions that streamline your business processes
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflows.map((workflow, index) => (
            <div key={index} className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={workflow.image}
                  alt={workflow.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{workflow.title}</h3>
                <p className="text-gray-600 mb-4 min-h-[3rem]">{workflow.description}</p>
                <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}