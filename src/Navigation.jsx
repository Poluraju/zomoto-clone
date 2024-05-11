import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

export default function() {
  return (
    <div>
        <div className='nav'>
            <div className='logo'>
            <img src="https://static.vecteezy.com/system/resources/previews/020/336/201/original/zomato-logo-zomato-icon-free-free-vector.jpg" alt="" />
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/">BiryaniItems</Link></li>
                    <li><Link to="/starters">Starters</Link></li>
                    <li><Link to="/curriesroties">CurriesRoties</Link></li>
                    <li><Link to="/desserts">Desserts</Link></li>
                </ul>
            </div>
            <div className='input'>
                <input type="text" />
            </div>
            <div className='log'>
                <button>Log in</button>
            </div>
            <div className='sign'> 
                <button>
                    Sign up
                </button>
            </div>
        </div>
    </div>
  )
}
