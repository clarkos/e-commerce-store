import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';

import Billboard from '@/components/Billboard';
import ProductList from '@/components/Products';

import Container from '@/components/ui/Container';

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true })
  const allProducts = await getProducts({})
  const billboard = await getBillboard("bd8588a1-cda6-4fc8-a7d0-00e34b48156a")
  
  
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
        </div>
        <hr />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="All in Stock" items={allProducts} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage