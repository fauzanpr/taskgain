import Logo from "@assets/Logo.svg";
import LogoWhite from "@assets/LogoWhite.svg"
import Container from "@components/Container";
import Button from "@components/Button";
import { headerValue } from "@utils/constant";
import { useState } from "react";

interface IProps {
  active?: string;
}

function Header({ active = "" }: IProps) {;
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav className={`${ color ? "bg-white" : "bg-transparent" } fixed w-full z-50`}>
      <Container>
        <div>
          <div className="flex flex-wrap justify-between items-center mx-auto py-4">
            { color ? <img src={Logo.src} alt="Logo taskgain" width={150} /> : <img src={LogoWhite.src} alt="Logo taskgain" width={150} /> }
            <div
              id="mega-menu-full"
              className="items-center justify-between font-medium hidden w-full md:flex md:w-auto"
            >
              <ul
                className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent"
              >
                {
                  headerValue.map((headerItem) => (
                    <li>
                      <a
                        href={headerItem.url}
                        className={`block py-2 pl-3 pr-4 rounded hover:text-primaryHover ${active === headerItem.label && "text-blue-700"
                          } ${ color ? "text-gray-900" : "text-white" }`}
                      >
                        {headerItem.label}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <a href="#" className={`border px-6 py-2 rounded-full ${color ? "border-black text-black" : "border-gray-400 text-white"}`}>Login</a>
              <Button text="Get Started" />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Header