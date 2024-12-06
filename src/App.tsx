import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorkflowShowcase } from './components/WorkflowShowcase';
import { Tutorial } from './components/Tutorial';
import { Features } from './components/Features';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
        <Hero />
        <WorkflowShowcase />
        <Tutorial />
        <Features />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;