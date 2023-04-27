import { logo } from '../assets'
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="summrize logo" className='w-28 object-contain'/>
            <button
            type="button"
            onClick={()=> window.open('https://github.com/')}

            className='black_btn'
            >
                GitHub
            </button>
        </nav>
        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden'/>
            <span className='blue_gradient'>SumRize AI</span>
        </h1>
        <h2 className='desc'>
            Summarize your articles and blog posts with SumRize, an open source article summarizer that transforms lengthy articles into clear and concise summaries
        </h2>
    </header>
  )
}

export default Hero