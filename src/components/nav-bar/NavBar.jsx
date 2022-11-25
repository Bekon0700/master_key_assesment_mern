import {FaUserCircle} from 'react-icons/fa'
import {CiSearch} from 'react-icons/ci'
import {IoLocationOutline} from 'react-icons/io5'

const navData = [
    'Fresh', "Today's Deals", 'Mobiles', 'gift cards', 'women clothin',
    'men clothing', 'kid clothing', 'health', 'pet corner', 'books', 'beauty',
    'kitchen', 'bed room', 'sport', 'bags'
]


const NavBar = () => {
    return (
        <div className='flex flex-col gap-3 py-3'>
            <div className='flex justify-between items-center'>
                <p className="text-3xl font-extrabold">shop<span className="font-normal">cart</span></p>
                <div className='flex gap-2 items-center'>
                    <FaUserCircle className='text-2xl'/>
                    <p className='text-base font-medium'>Sign in</p>
                </div>
            </div>
            <div className="divider"></div>
            <div>
                <div className='flex justify-between'>
                    <div className='flex gap-2 bg-[#FFAE5D] rounded-2xl items-center py-4 px-3 font-medium'>
                        <IoLocationOutline className='text-2xl'/>
                        <p className='text-base'>Dhaka, 1212</p>
                    </div>
                    <div className='w-1/2 border flex justify-between items-center rounded-2xl px-3'>
                        <input type="text" placeholder='search' className='border-none outline-none text-lg'/>
                        <CiSearch className='text-2xl'/>
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-between pt-3 text-[#606060] font-medium text-base'>
                {
                    navData.map((link, id) => <p key={id} className='capitalize cursor-pointer'>{link}</p>)
                }
            </div>
        </div>
    )
}

export default NavBar