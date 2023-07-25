import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/Products";
import Gallery from "@/components/gallery";
import Info from "@/components/Info";
import Container from "@/components/ui/Container";

export const revalidate = 0;

interface ProductProps {
  params: {
    productId: string;
  }
}

const ProductPage: React.FC<ProductProps> = async ({
  params
}) => {

  const product = await getProduct(params.productId)

  const suggestedProducts = await getProducts({ 
    categoryId: product?.category?.id 
  });

  if(!product) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 md:items-start md:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 md:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div> 
  )
}

export default ProductPage