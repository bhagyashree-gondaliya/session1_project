import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const onThemeChanged = () => {
    toggleTheme(!theme);
  };

  return (
    <>
      <header>
        <nav className="flex flex-col items-center md:max-w-3xl lg:max-w-5xl sm:max-w-5xl w-full mx-auto">
          <div
            className="w-full md:flex md:items-center md:w-auto sm:w-auto"
            id="menu"
          >
            <ul
              className="
            pt-4
            text-base text-gray-700
            flex
            justify-between
            justify-center
            items-center
            pt-0"
            >
              <li>
                <Link
                  className="hover:scale-110 md:p-4 py-2 block hover:text-purple-400"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="hover:scale-110 md:p-4 py-2 block hover:text-purple-400"
                  to="/blogs"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="hover:scale-110 md:p-4 py-2 block hover:text-purple-400"
                  to="/devJokes"
                >
                  Dev Jokes
                </Link>
              </li>
              <li>
                <Link
                  className="hover:scale-110 md:p-4 py-2 block hover:text-purple-400"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <label className="relative inline-flex items-center  mt-5 mr-5 cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    defaultChecked
                    onChange={onThemeChanged}
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                </label>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
