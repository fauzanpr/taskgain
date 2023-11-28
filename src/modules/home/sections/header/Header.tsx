import Logo from "@assets/Logo.svg";
import LogoWhite from "@assets/LogoWhite.svg"
import Container from "@components/Container";
import Button from "@components/Button";
import LogoBlue from "@assets/LogoBlue.svg";
import { headerValue } from "@utils/constant";
import { useState } from "react";

interface IProps {
  active?: string;
  type?: "normal" | "blue";
}

function Header({ active, type = "normal" }: IProps) {
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
    <nav className={`transition-all ${color ? "bg-white" : "bg-transparent"} fixed w-full z-50`}>
      <Container>
        <div>
          <div className="flex flex-wrap justify-between items-center mx-auto py-4">
            {color ? (type === "blue" ? <a href="/">
              <img src={LogoBlue.src} alt="Logo taskgain" width={150} />
            </a> : <a href="/"><img src={Logo.src} alt="Logo taskgain" width={150} /></a>) : (type === "blue" ? <a href="/"><img src={LogoBlue.src} alt="Logo taskgain" width={150} /></a> : <a href="/"><img src={LogoWhite.src} alt="Logo taskgain" width={150} /></a>)}
            <div
              id="mega-menu-full"
              className="items-center justify-between font-medium hidden w-full md:flex md:w-auto"
            >
              <ul
                className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent"
              >
                <li>
                  {active === "product" ? <a
                    href="/product"
                    className={`block py-2 pl-3 pr-4 rounded hover:text-primaryHover text-primary`}
                  >
                    Product
                  </a> : <a
                    href="/product"
                    className={`block py-2 pl-3 pr-4 rounded hover:text-primaryHover  ${color ? "text-gray-900" : (type === "blue" ? "text-gray-900" : "text-white")} ${active === "product" && "text-blue-700"
                      }`}
                  >
                    Product
                  </a>}
                </li>

                <li>
                  {active === "resources" ? <a
                    href="/resources"
                    className={`block py-2 pl-3 pr-4 rounded hover:text-primaryHover text-primary`}
                  >
                    Resources
                  </a> : <a
                    href="/resources"
                    className={`block py-2 pl-3 pr-4 rounded hover:text-primaryHover  ${color ? "text-gray-900" : (type === "blue" ? "text-gray-900" : "text-white")} ${active === "resources" && "text-blue-700"
                      }`}
                  >
                    Resources
                  </a>}
                </li>

                <li>
                  {active === "enterprise" ? <a
                    href="/enterprise"
                    className={`block py-2 pl-3 pr-4 rounded hover:text-primaryHover text-primary`}
                  >
                    Enterprise
                  </a> : <a
                    href="/enterprise"
                    className={`block py-2 pl-3 pr-4 rounded hover:text-primaryHover  ${color ? "text-gray-900" : (type === "blue" ? "text-gray-900" : "text-white")} ${active === "enterprise" && "text-blue-700"
                      }`}
                  >
                    Enterprise
                  </a>}
                </li>

                <li>
                  {active === "pricing" ? <a
                    href="/pricing"
                    className={`block py-2 pl-3 pr-4 rounded hover:text-primaryHover text-primary`}
                  >
                    Pricing
                  </a> : <a
                    href="/pricing"
                    className={`block py-2 pl-3 pr-4 rounded hover:text-primaryHover  ${color ? "text-gray-900" : (type === "blue" ? "text-gray-900" : "text-white")} ${active === "pricing" && "text-blue-700"
                      }`}
                  >
                    Pricing
                  </a>}
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className={`transition-all border px-6 py-2 hover:bg-primary hover:border-primary hover:text-white rounded-full ${color ? "border-gray-400 text-black" : (type === "blue" ? "border-gray-400 text-gray-900" : "border-gray-400 text-white")}`}>Login</a>
              <Button text="Get Started" />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Header
