import BurgerMenu from "@assets/icon/burgermenu.svg";

function MenuDropdown() {
    return (
        <>
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center lg:hidden" type="button">
                <img src={BurgerMenu.src} alt="Burger Menu" width={20} />
            </button>

            {/* Dropdown Menu */}
            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 lg:hidden">
                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="/product" className="block px-4 py-2 hover:bg-gray-100">Product</a>
                    </li>
                    <li>
                        <a href="/resources" className="block px-4 py-2 hover:bg-gray-100">Resources</a>
                    </li>
                    <li>
                        <a href="/enterprice" className="block px-4 py-2 hover:bg-gray-100">Enterprice</a>
                    </li>
                    <li>
                        <a href="/pricing" className="block px-4 py-2 hover:bg-gray-100">Pricing</a>
                    </li>
                    <div className="mt-4 flex flex-col gap-1 p-1">
                        <li>
                            <a href="#" className="block px-4 py-2 border-[.5px] border-gray-500 rounded-lg">Login</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 bg-primary text-white border rounded-lg">Get Started</a>
                        </li>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default MenuDropdown;