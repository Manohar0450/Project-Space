import React from 'react';
import Image from 'next/image';
 
export default function ResourcesLinks() {
  return (
    <section className="relative" style={{ backgroundColor: "#66FF00" }}>
      <div className="container mx-auto mt-12 px-4">
        <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-r ">
          <div className="p-8">
          <button className="container flex justify-center items-center button-red mb-8">Ready To Get Started</button>

            <h2 className="text-2xl font-bold text-white mb-4">Whether you're a project seeker in search of the perfect collaboration or a creator eager to embark on exciting new projects, Project Connect is your gateway to success. Join our community today and unlock endless possibilities!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Skin Cancer Foundation */}
              <ResourceCard
                title="Email Address"
                links={[
                  { text: "What.ok@gmail.com", url: "https://www.skincancer.org/skin-cancer-information/skin-cancer-facts/?fbclid=IwAR3r4icfuXoOjTxPX_AaHG8qRosxKMzdmrBMdciB6TmZ1kGisMwLLRyP0OM" },
                ]}
              />
              {/* American Academy of Dermatology */}
              <ResourceCard 
                title="Mobile Number"
                title="Whats App"
                links={[
                  { text:"1234567890`1234567`", url: "https://www.aad.org/public/diseases/skin-cancer/prevent/how" },
                  { text:"1234567890`1`", url: "https://www.aad.org/public/diseases/skin-cancer/prevent/how" },

                  ]}
              />
              {/* Melanoma Research Fund (MRF) */}
              <ResourceCard
                title="Any other queries Contact"
                links={[
                  { text: "no:76453464623", url: "https://melanoma.org/melanoma-education/prevention/young-adult-prevention/" },
                ]}
              />
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ResourceCard = ({ title, links }: { title: string; links: { text: string; url: string }[] }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <a href={link.url} className="text-orange-700 hover:underline">{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
