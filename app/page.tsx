import { getAllProducts } from '@/sanity/lib/client'
import { getWheelOfFortuneActions } from '@/src/actions/wheel-of-fortune-actions'
import SalesCampaignBanner from '@/src/components/layout/SalesCampaignBanner'
import WheelOfFortune from '@/src/components/layout/WheelOfFortune'
import ProductGrid from '@/src/components/product/ProductGrid'
import React from 'react'

const Home = async() => {
  const products = await getAllProducts()
  const {randomProducts , winingIndex}= await getWheelOfFortuneActions()
 
  return (
    <div>
      <SalesCampaignBanner />
      <WheelOfFortune
      products={randomProducts}
      winingIndex={winingIndex}
      />
      <section className='container mx-auto py-8'>
        <ProductGrid products={products} />
      </section>
    </div>
  ) 
}

export default Home
