import Logo from "@assets/Logo.svg";
import Container from "@components/Container";
import Button from "@components/Button";

function Header() {
  return (
    <nav className="bg-white fixed w-full">
      <Container>
        <div>
          <div className="flex flex-wrap justify-between items-center mx-auto py-4">
            <img src={Logo.src} alt="Logo taskgain" width={150} />
            <div id="mega-menu-full" className="items-center justify-between font-medium hidden w-full md:flex md:w-auto">
              <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                <li>
                  <button
                    id="mega-menu-full-dropdown-button"
                    data-collapse-toggle="product"
                    className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">
                    Product
                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4">
                      </path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    id="mega-menu-full-dropdown-button"
                    data-collapse-toggle="resources"
                    className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                  >Resources <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"></path>
                    </svg></button>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >Enterprice</a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >Pricing</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-8">
              <a href="#">Login</a>
              <Button text="Get Started" />
            </div>
          </div>
        </div>
      </Container>

      {/* product */}
      <div
        id="product"
        className={`mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y`}
      >
        <div
          className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 sm:grid-cols-2 md:px-6"
        >
          <ul>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500"
                >Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500"
                >Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500"
                >Connect with third-party tools that you're already using.</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500"
                >Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500"
                >Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500"
                >Connect with third-party tools that you're already using.</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* resources */}
      <div
        id="resources"
        className={`mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y`}
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 sm:grid-cols-2 md:px-6">
          <ul>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500"
                >Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500"
                >Connect with third-party tools that you're already using.</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500"
                >Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500"
                >Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500"
                >Connect with third-party tools that you're already using.</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Header;
