import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";

import Billboard from "@/components/Billboard";

import Container from "@/components/ui/Container";
import NoResults from "@/components/ui/noResults";
import ProductCard from "@/components/ui/ProdCard";

import MobileFilter from "./components/MobileFilter";
import Filter from "./components/Filter";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string
  },
  searchParams: {
    colorId: string;
    sizeId: string;
  }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams
}) => {

  const products = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="md:grid md:grid-cols-5 md:gap-x-8">
            <MobileFilter sizes={sizes} colors={colors} />
            <div className="hidden md:block">
              <Filter 
                valueKey="sizeId"
                name="Sizes"
                data={sizes}
              />
              <Filter 
                valueKey="colorId"
                name="Color"
                data={colors}
              />
            </div>
            <div className="mt-6 md:col-span-4 md:mt-0">
              {products.length === 0 && <NoResults /> }
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((prod) => (
                  <ProductCard 
                    key={prod.id}
                    data={prod}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>  
    </div>
  )
}

export default CategoryPage