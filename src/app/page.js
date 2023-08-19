import Navbar from '@/component/navbar'
import Home1 from '@/component/Home1'
import Slider from '@/component/Slider'
import Carosel from '@/component/Carosel'
import Wonder from '@/component/Wonder'
export default function Home() {
  return (
    <main>
      <Navbar/>
       <Home1/>
       <Carosel/> 
       <Slider/>
       <Wonder/>
    </main>
  )
}
