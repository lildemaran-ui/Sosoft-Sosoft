import { Link, useLocation } from "react-router-dom";
import iconNav from "../assets/IconFooter.png";

export default function RotaLogo() {
   const verificar = useLocation().pathname === '/'

   function analisar(){
    window.scrollTo ({
        top:0, 
        behavior:"smooth"
    })
   }
   if(verificar){
    return(
        <span onClick={analisar}></span>
    )
   }

   return(
    <Link to='/'>
    <div className="flex gap-3 items-center text-xl sm:text-3xl text-white cursor-pointer font-semibold">
              <img
                src={iconNav}
                alt="Sosoft Logo"
                className="h-8 sm:h-12 object-contain"
              />
              <p >SOSOFT</p>
            </div>
    </Link>
   )
     
}