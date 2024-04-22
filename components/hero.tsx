import FeBg from '@/public/images/about11.jpg'
import home2 from '@/public/images/home2.jpg'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative" >
      <div style={{ position: 'relative' ,backgroundColor:'#318CE7'}}>
    <Image src={FeBg} alt="Febg" style={{ height: '70vh',width:'100vh' }} />
        <div style={{ position: 'absolute', top: '50%', left: '70%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
           <h2 className="text-3xl font-semibold mb-4 animate-slideTopDown" style={{ color: 'black'}}>PROJECT CONNECT WE WILL DO WHAT YOU WANT</h2>
          <p className="text-lg animate-slideBottomUp" style={{ color: 'black'}} > Every great project starts with a vision, but it's the integration of IoT that transforms that vision into a reality of interconnected possibilities."</p>
         </div>
  </div>
  <div className="container mx-auto mt-12 px-4 flex flex-wrap items-center" style={{backgroundColor:"#f6f6f6"}}>
    <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-r text-white" style={{ backgroundColor: "#f6f6f6" }}>

  <button className="container flex justify-center items-center button-red mb-8">Welcome to Project Connect</button>
   <div style={{backgroundColor:"#8DA399",color:"black"}}>
    <p>
    Are you on the lookout for a project that aligns perfectly with your interests and expertise? Look no further! Project Connect is here to bridge the gap between project seekers and creators, facilitating meaningful collaborations and project development.

    </p>

    <p className="animate-slideLeft text-lg mb-6">
    How it Works:
  
    </p>
    
    <p className="animate-slideLeft text-lg mb-6">
    1. Explore Diverse Projects: Browse through a wide array of project ideas spanning various domains, from IoT and AML integration to machine learning and beyond.

    </p>
    <p className="animate-slideLeft text-lg mb-6">
    2. Submit Your Project Requirements: If you have a specific project in mind, simply fill out our project request form detailing your requirements, objectives, and desired technologies.
    </p>
    <p className="animate-slideLeft text-lg mb-6">
    3. Connect with Creators: Once your project request is submitted, our platform matches you with experienced creators. whose skills and expertise best fit your project needs.

    </p>
    <p className="animate-slideLeft text-lg mb-6">
    4. Collaborate and Create: Engage with your matched creators to discuss project details, refine your vision, and collaborate on bringing your project to life.

 
    </p>
    <p className="animate-slideLeft text-lg mb-6">
5. Bring Your Ideas to Reality: Witness your project evolve from concept to completion as 
    </p>
    </div>
  </div>
</div>
{/* <div className="w-full md:w-1/2">
  <Image src={home2} alt="Febg"  className='animate-rightLeft' />
</div> */}

    </section>
  )
}