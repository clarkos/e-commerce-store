import { Product } from '@/types';

import NoResults from '@/components/ui/noResults';
import ProdCard from '@/components/ui/ProdCard';

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  items
}) => {
  return (
    <div className='space-y-4 '>
      <h3 className='font-bold font-logoMain text-3xl'> {title} </h3>
      {items.length === 0 && <NoResults /> }
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProdCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}

export default ProductList;