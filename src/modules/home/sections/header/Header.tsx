import Logo from "@assets/Logo.svg";
import Container from "@components/Container";
import Button from "@components/Button";
import { headerValue } from "@utils/constant";

function Header() {
  return (
    <nav className="bg-white fixed w-full z-50">
      <Container>
        <div>
          <div className="flex flex-wrap justify-between items-center mx-auto py-4">
            <img src={Logo.src} alt="Logo taskgain" width={150} />
            <div id="mega-menu-full" className="items-center justify-between font-medium hidden w-full md:flex md:w-auto">
              <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                {headerValue.map(headerItem => <li key={headerItem.id}>
                  <a
                    href={headerItem.url}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >{headerItem.label}</a>
                </li>)}
              </ul>
            </div>
            <div className="flex items-center gap-8">
              <a href="#">Login</a>
              <Button text="Get Started" />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
};

export default Header;
