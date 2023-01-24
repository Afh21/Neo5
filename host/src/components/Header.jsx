import React from "react";
import { NavLink } from "react-router-dom";
import { ContextProvider as Context } from "shared/ContextProvider";
import { LOCALES } from "shared/translation";
import "../assets/styles/Header.css";

const IntlFormatterMsg = React.lazy(() =>
   import("shared/IntlFormatterMessage")
);

function Header({ messages }) {
   const ctxLocale = React.useContext(Context);

   return (
      <React.Suspense fallback='Loading...'>
         <header>
            <h1 className='header__title'>
               <NavLink className='header__title link' to='/'>
                  {messages[ctxLocale?.state?.language].title_host}
               </NavLink>
            </h1>
            <nav>
               <ul className='header__link_group'>
                  <li>
                     <NavLink className='header__link' to='/first_app'>
                        {messages[ctxLocale?.state?.language].links_btn1}
                     </NavLink>
                  </li>
                  <li>
                     <NavLink className='header__link' to='/second_app'>
                        {messages[ctxLocale?.state?.language].links_btn2}
                     </NavLink>
                  </li>
               </ul>
            </nav>
            <button
               onClick={() => {
                  ctxLocale?.setState({ language: LOCALES.ENGLISH });
               }}
               className='header__switch'
               type='button'
            >
               EN-US
            </button>
            <button
               onClick={() => {
                  ctxLocale?.setState({ language: LOCALES.SPANISH });
               }}
               className='header__switch'
               type='button'
            >
               ES-SP
            </button>
         </header>
      </React.Suspense>
   );
}

export default Header;
