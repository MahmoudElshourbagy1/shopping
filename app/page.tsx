import { getAllProducts } from '@/sanity/lib/client'
import { getCurrentSession } from '@/src/actions/auth'
import SalesCampaignBanner from '@/src/components/layout/SalesCampaignBanner'
import ProductGrid from '@/src/components/product/ProductGrid'
import React from 'react'

const Home = async() => {
  const { user } = await getCurrentSession();
  const products = await getAllProducts()
 
  return (
    <div>
      <SalesCampaignBanner />
      <section className='container mx-auto py-8'>
        <ProductGrid products={products} />
      </section>
    </div>
  ) 
}

export default Home
