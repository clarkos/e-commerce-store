"use client"

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types";

import useCart from "@/hooks/useCart";
import usePreviewModal from "@/hooks/usePreviewModal";

import Currency from "@/components/Currency";
import IconButton from "@/components/ui/IconButton";

interface ProdCardProps {
  data: Product;
}

const ProdCard: React.FC<ProdCardProps> = ({
  data
}) => {
  const cart = useCart()
  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  }

  return (
    <div onClick={handleClick} className="group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          fill
          alt=""
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              className="bg-neutral-800 bg-opacity-60"
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-300" />}
            />
            <IconButton
              className="bg-neutral-800 bg-opacity-60"
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-300" />}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="font-logoMain font-semibold text-lg">{data.name}</p>
        <p className="font-logoSub italic text-sm">{data.category?.name}</p>
      </div>
      <div className="font-logoMain flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProdCard;
