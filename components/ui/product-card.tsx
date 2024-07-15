"use client";

import { Expand, ShoppingCart } from "lucide-react";

import Image from "next/image";
import { Product } from "@/type";

import IconButton from "./icon-button";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModel from "@/hooks/use-preview-model";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  //setup extended product
  const previewModel = usePreviewModel();
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModel.onOpen(data);
  };

  //setup add to cart
  const cart = useCart();
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 "
    >
      <div className=" aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="product image"
          src={data?.images?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />

        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          {/* Expand button */}
          <div className="flex gap-x-6 justify-center ">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} />}
              className="text-gray-600"
            />
            {/* add to cart button */}
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} />}
              className="text-gray-600"
            />
          </div>
        </div>
      </div>

      {/* description */}
      <div>
        <p className=" font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
};

export default ProductCard;
