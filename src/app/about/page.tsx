import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import {Photo} from "@/components/Photo"

export default function About(){
    return(
        <div className="bg-black text-white">
        <Navbar />
        <div className="min-h-screen">    
        <h1 className='text-7xl font-bold tracking-tighter text-center py-6'>
          The Story
          </h1>  
        <p className='text-center text-xl mt-8 mb-6'>
        FACt started with a straightforward goal: to make file analysis easier and more accessible. <br/>
        Whether it&apso;s PDFs, DOCXs, or PPTXs, FACt is designed to help users quickly get insights and answers from their documents.<br />
        By integrating smart tools, FACt simplifies the way people interact with their files, making it faster to analyze and find what matters.
        </p>
        <div>
            <Photo />
           </div>
        </div>
        <Footer />
      </div>
    )
}
