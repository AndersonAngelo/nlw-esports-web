import logoImg from './assets/logo-nlw-esports.svg'
import './styles/main.css'

function App() {

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="logo nlw eSports" />
      <h1 className='text-6xl text-white font-black'>
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.
      </h1>
      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/public/game-1.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>League of legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="">
          <img src="/public/game-2.png" alt="" />
        </a>
        <a href="">
          <img src="/public/game-3.png" alt="" />
        </a>
        <a href="">
          <img src="/public/game-4.png" alt="" />
        </a>
        <a href="">
          <img src="/public/game-5.png" alt="" />
        </a>
        <a href="">
          <img src="/public/game-6.png" alt="" />
        </a>
      </div>
    </div>
  )
}
export default App;
