import { Poppins } from 'next/font/google'
const inter = Poppins({ weight: ['100', '200' , '300' , '400', '500', '600', '700', '800', '900'] ,subsets: ['latin'] })

const Navbar = () => {
  return (
    <nav className={inter.className}>
        <div className="py-[20px] px-[40px] font-[300] bg-[#00000096]">
          <h2 className="text-[20px] text-[#ffffff]">Your<span className="font-[700]">Random</span>Words</h2>
        </div>
    </nav>
  )
}

export default Navbar