import React from 'react';
import { Play } from 'lucide-react';

export function Tutorial() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">See StreamHive in Action</h2>
          <p className="text-xl text-gray-600">Watch how our platform transforms business workflows</p>
        </div>
        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/gofNLKIrFCQ"
              title="StreamHive Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}