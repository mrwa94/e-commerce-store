import getProducts from "@/actions/get-products";

export const revalidete = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId:params.categoryId,
    colorId:searchParams.colorId,
    sizeId:searchParams.sizeId,
  })
  return <div>Category Id</div>;
};

export default CategoryPage;
