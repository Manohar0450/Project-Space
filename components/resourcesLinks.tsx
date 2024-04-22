import React from 'react';
import Image from 'next/image';

export default function ResourcesLinks() {
  return (
    <section className="relative" style={{ backgroundColor: "#66FF00" }}>
      <div className="container mx-auto mt-12 px-4">
        <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-r ">
          <div className="p-8">
            <button className="container flex justify-center items-center button-red mb-8">Ready To Get Started</button>

            <h2 className="text-2xl font-bold text-white mb-4">Whether you're a project seeker in search of the perfect collaboration or a creator eager to embark on exciting new projects, Project Connect is your gateway to success. Join our community today and unlock endless possibilities!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Email Address */}
              <ResourceCard
                title="Email Address"
                links={[
                  { text: "projectconnect.pc@gmail.com", url: "mailto:projectconnect.pc@gmail.com" },
                ]}
              />
              {/* WhatsApp */}
              <ResourceCard 
                title="WhatsApp"
                links={[
                  { text:"9010488777", url: "https://wa.me/9010488777" },
                ]}
              />
              {/* Any other queries Contact */}
              <ResourceCard
                title="Any other queries Contact"
                links={[
                  { text: "9246699008", url: "" },
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
            <a href={link.url} className="text-orange-700 hover:underline" target="_blank" rel="noopener noreferrer">{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
