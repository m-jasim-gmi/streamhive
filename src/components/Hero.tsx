import React from 'react';
import { ArrowRight, Workflow, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Automate Your Business,
              <span className="text-blue-600 block">Amplify Your Success</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Transform your workflow with intelligent automation solutions. Save time, reduce errors, and scale your business effortlessly.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="https://www.youtube.com/watch?v=gofNLKIrFCQ"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                <Play className="w-5 h-5" /> Watch Demo
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
              <Workflow className="w-64 h-64 lg:w-96 lg:h-96 text-blue-600 relative z-10 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}