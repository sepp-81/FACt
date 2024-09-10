import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function About(){
    return(
        <div className="bg-black text-white">
        <Navbar />
        <div className="min-h-screen">    
        <h1 className='text-7xl font-bold tracking-tighter text-center py-6'>
          The Story
          </h1>  
        <p className='text-center text-xl mt-8 mb-6'>
           
        </p>
        </div>
        <Footer />
      </div>
    )
}