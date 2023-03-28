import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'

import LeftNavMenuItem from './LeftNavMenuItem';
import {categories} from '../utils/constants'
import { Context } from '../context/contextAPI';


const LaftNav = () => {

const {SelectCatagory,setSelectCatagory, mobileMenu}=useContext(Context);

const navigate=useNavigate();
const clickHandler=(name,type)=>{
  switch (type) {
    case "category":
      return setSelectCatagory(name)
      case "home":
        return setSelectCatagory(name)
        case "menu":
          return false
    default:
      break;
  }
}

  return <div className='md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all'>

    <div className="flex px-5 flex-col">
      {categories.map((item)=>{
        return(
          <React.Fragment>
            <LeftNavMenuItem 
                  text={item.type==="home" ? "Home" : item.name}
                  icon={item.icon}
                  key={item.name}
                  action={(e)=>{
                    clickHandler (item.name,item.type);
                    navigate("/"); 
                  }}
                  className={`${SelectCatagory === item.name ? " bg-white/[0.15]":""}`}
            />
            {item.divider && ( 
              <hr className='text-white my-5 border-white/[0.2]' />
             )}
           
          </React.Fragment>
        )
      })}
       <hr className='my-5 border-white/[0.2]' />
       <div className='text-white/[0.5] text-[12px]'>
        Clone by Atharv Thorat
       </div>
    </div>
  </div>
}

export default LaftNav
