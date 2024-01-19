import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Bars3Icon } from '@heroicons/react/24/outline'

const SearchBar = () => {
    return (
        <div className='flex justify-center place-items-center bg-deep-orange-900'>
            <HeartIcon className='h-40 text-white' />
            <button className='pr-8'>
                <Bars3Icon className='h-7' />
            </button>
            <label className="flex">
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-l-full py-2 pl-4 pr-[39rem] shadow-sm focus:outline-none focus:border-red-600 sm:text-sm" placeholder="Búsqueda de Productos..." type="text" name="search" />
                <button className='rounded-r-full bg-red-600 sm:text-sm py-2 px-4 border-red-600 border hover:text-gray-700 h-full'>
                    <MagnifyingGlassIcon className="h-6 w-6 text-white" />
                </button>
            </label>
            <button>
                <UserIcon className='flex h-7 px-10 text-white' />
            </button>
            <button className='flex'>
                <ShoppingBagIcon className='flex h-7 pl-4 text-white' />
                <span className='text-white'>$0</span>
            </button>
        </div>
    );
}

export default SearchBar;