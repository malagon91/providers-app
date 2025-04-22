import React from 'react';
import * as Separator from '@radix-ui/react-separator';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const AdvancedFooter = () => {
  const currentYear = new Date().getFullYear();

  // Footer navigation categories
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { title: 'Features', href: '/features' },
        { title: 'Pricing', href: '/pricing' },
        { title: 'Use Cases', href: '/use-cases' },
        { title: 'Integrations', href: '/integrations' },
      ],
    },
    // ... (resto de tus categorías)
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white text-slate-200 border-t border-gray-200">
      <div className="max-w-6xl mx-auto py-1 px-4 w-full">
        {/* Contenido superior del footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold mb-2 text-black">YourApp</div>
            <p className="text-slate-500 max-w-md text-sm">
              Your application description goes here.
            </p>
          </div>

          <div>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Facebook"
              >
                <CiFacebook className="text-black w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-black w-6 h-6" />
              </a>
              <a
                href="https://x.com"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-black w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <Separator.Root className="bg-slate-300 h-px w-full mb-4" />

        {/* Bottom footer */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {currentYear} YourApp. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            <a href="/terms" className="hover:text-black transition-colors">
              Terms
            </a>
            <a href="/privacy" className="hover:text-black transition-colors">
              Privacy
            </a>
            <a href="/cookies" className="hover:text-black transition-colors">
              Cookies
            </a>
            <a href="/sitemap" className="hover:text-black transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AdvancedFooter;