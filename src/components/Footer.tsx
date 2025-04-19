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
    {
      title: 'Resources',
      links: [
        { title: 'Documentation', href: '/docs' },
        { title: 'Blog', href: '/blog' },
        { title: 'Tutorials', href: '/tutorials' },
        { title: 'Support', href: '/support' },
      ],
    },
    {
      title: 'Company',
      links: [
        { title: 'About', href: '/about' },
        { title: 'Team', href: '/team' },
        { title: 'Careers', href: '/careers' },
        { title: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { title: 'Terms of Service', href: '/terms' },
        { title: 'Privacy Policy', href: '/privacy' },
        { title: 'Cookie Policy', href: '/cookies' },
        { title: 'Security', href: '/security' },
      ],
    },
  ];

  return (
    <footer className="bg-white text-slate-200">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2">YourApp</div>
            <p className="text-slate-400 max-w-md text-sm">
              Your application description goes here. Just a brief overview of
              what your app is about and why people should care.
            </p>
          </div>

          <div>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="p-2 rounded-full  transition-colors"
                aria-label="Facebook"
              >
                <CiFacebook className="text-black w-8 h-8 " />
              </a>
              <a
                href="https://instagram.com"
                className="p-2 rounded-full  transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-black w-8 h-8 " />
              </a>
              <a
                href="https://x.com"
                className="p-2 rounded-full  transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-black w-8 h-8 " />
              </a>
            </div>
          </div>
        </div>
        <Separator.Root className="bg-slate-800 h-px w-full mb-8" />

        {/* Bottom footer */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© {currentYear} YourApp. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="/cookies" className="hover:text-white transition-colors">
              Cookies
            </a>
            <a href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AdvancedFooter;
