export const metadata = {
  title: 'PROJECT SPACE:We will complete it on schedule',
  description: 'shines a light on skin cancer prevention, fostering a safer, healthier campus environment for all.',
}

import Hero from '@/components/hero'
import CancerFacts from '@/components/cancerFacts'

import ResourcesLinks from '@/components/resourcesLinks'
export default function Home() {
  return (
    <>
      <Hero />
      <CancerFacts/>
      
          <ResourcesLinks/>
    </>
  )
}
