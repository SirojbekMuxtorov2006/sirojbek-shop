import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/logo.svg'

const Navbar = () => {
	return (
		<>
			<div className=' justify-between h-14 items-center fixed top-0 z-50 w-full flex-row bg-white shadow-md p-4 hidden md:flex'>
				<Link href={'/'} className='flex items-center space-x-2 cursor-pointer'>
					<div className='flex items-center justify-start space-x-2'>
						<Image src={logo} alt='sirojbek' width={50} height={50} />
						<div>
							<span className='flex text-2xl font-bold text-gray-800'>
								Sirojbek Shop
							</span>
						</div>
					</div>
				</Link>

				<div className='flex items-center  space-x-4'>
					<Link
						href='/'
						className='text-gray-800 hover:text-blue-500 transition duration-500 ease-in-out'
					>
						<span className='flex text-lg font-bold'>Home</span>
					</Link>
					<Link
						href='/products'
						className='text-gray-800 hover:text-blue-500 transition duration-500 ease-in-out'
					>
						<span className='flex text-lg font-bold'>All Products</span>
					</Link>
				</div>
				<div className='space-x-4'>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-500 ease-in-out'>
						<span className='flex text-lg font-bold text-gray-800'>Login</span>
					</button>
					<button className='border border-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-500 ease-in-out'>
						<span className='flex text-lg font-bold text-gray-800'>
							Register
						</span>
					</button>
				</div>
			</div>
			{/* for mobile */}
			<div className='flex md:hidden fixed top-0 w-full h-14 z-30 bg-blue-400'>
				<div>
					<Link
						href={'/'}
						className='flex items-center space-x-2 cursor-pointer'
					>
						<div className='flex items-center justify-start space-x-2'>
							<Image src={logo} alt='Oziy Shop' width={50} height={50} />
							<div>
								<span className='flex text-2xl font-bold text-gray-800'>
									Sirojbek Shop
								</span>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	)
}

export default Navbar
