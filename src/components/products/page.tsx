'use client'
import { ProductType } from "@/interface"
import Image from "next/image"
import Link from "next/link"
// import { data } from "autoprefixer"
import { useState } from "react"

const Products = () => {
  const [data, setData] = useState<ProductType[]>([])
  const getPost = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }
  getPost()
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-2 py-2 sm:px-6 sm:py-3 lg:max-w-7xl lg:px-3">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product: ProductType) => (
            <div key={product.id} className="group relative border border-amber-300 shadow-sm rounded-lg p-1">
              <Image
                quality={100}
                placeholder="blur"
                blurDataURL={product.image}
                priority
                width={500}
                height={500}
                alt={product.title}
                src={product.image}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="text-sm text-green-400">
                    {product.category}
                  </p>
                  <h3 className="text-{'10px'} text-violet-700 line-clamp-2">
                    <Link href={`/product/${product.id}`} className="font-semibold text-gray-900">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Products