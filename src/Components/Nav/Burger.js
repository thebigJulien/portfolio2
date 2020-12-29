import React from 'react';
import { MenuData } from '../MenuData';


const BurgerNav = () => {
 
    return (
      <div className="burgerNav">
          <div className="menu-button">
          <i class="fas fa-bars"></i>
          </div>

          {MenuData.length && (
              <nav>
                   <ul className="menu-items">
                        {MenuData.map(item => (
                            <li key={item.label} >
                                <a href={item.url}> {item.label} </a>
                            </li>
                        ))}
                    </ul>
              </nav>
             
          )}
      </div>
    );
  
};

export default BurgerNav;


