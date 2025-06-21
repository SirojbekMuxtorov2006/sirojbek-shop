import Footer from '@/components/footer/page'
import Hero from '@/components/hero/hero'
import Products from '@/components/products/page'
// import NoSSR from "react-no-ssr";

export default function Home() {
	return (
		<div>
			<Hero />
			<h1 className='text-3xl font-bold text-center my-4'>Sirojbek</h1>
			{/* <NoSSR> */}
			<Products />
			{/* </NoSSR> */}
			<Footer />
		</div>
	)
}
