import { useDispatch } from "react-redux"
import { logout } from "../../store/slices/trainer.slice"

export const HeaderPokeball = ({children}) => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <section>
        <header>
        <div className="h-16 bg-red-600 relative">
            <div className="absolute left-0 bottom-0 w-[210px] sm:w-[300px]">
                <img src="/images/banner.png" alt="" />
            </div>
        </div>
        <div className="h-12 bg-black relative">
            <button onClick={handleLogout} className="animate-bounce h-16 aspect-square bg-black  rounded-full absolute right-0 -translate-x-1/2 -top-8 border-[8px] border-white after:block after:content-[''] after:h-8 after:aspect-square after:bg-transparent after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-black "><i className='text-red-600  text-2xl bx bxs-log-in-circle bx-rotate-180'  ></i></button>
        </div>
        </header>
        {children}
    </section>
  )
}