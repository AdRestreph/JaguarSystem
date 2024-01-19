import React from 'react';
import { NavBarData } from '../../info/navBarData';

const NavBar = () => {
    return (
        <nav className="bg-red-900">
            <div className="flex justify-center items-center">
                <ul className="flex font-semibold h-full">
                    {NavBarData.map((navbar) => (
                        <li className='flex place-items-center' key={navbar.id}>
                            <a href={navbar.href} className={navbar.className}>
                                {navbar.text}<span>{navbar.icon && <navbar.icon className="h-5 flex"/>}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
export default NavBar;