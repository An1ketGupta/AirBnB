import { Globe, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <h2 className="text-xl font-medium mb-8">
          Inspiration for future getaways
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Help Centre</li>
              <li>Get help with a safety issue</li>
              <li>AirCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
              <li>Cancellation options</li>
              <li>Report neighbourhood concern</li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-semibold mb-3">Hosting</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Airbnb your home</li>
              <li>Airbnb your experience</li>
              <li>Airbnb your service</li>
              <li>AirCover for Hosts</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibly</li>
              <li>Join a free Hosting class</li>
              <li>Find a co-host</li>
            </ul>
          </div>

          {/* Airbnb */}
          <div>
            <h3 className="font-semibold mb-3">Airbnb</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>2025 Summer Release</li>
              <li>Newsroom</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Airbnb.org emergency stays</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>
            © 2025 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details
          </p>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="flex items-center gap-1">
              <Globe size={16} />
              <span>English (IN)</span>
            </div>
            <span>₹ INR</span>
            <Facebook size={18} className="cursor-pointer" />
            <Instagram size={18} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
