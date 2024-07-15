import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import { Billboard } from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from '@/components/product-list'

export const revalidated = 0;
const HomePage = async () => {
  const products = await getProducts({isFeatured: true});
  const billboard = await getBillboards("926d5ff7-60f2-4714-b8c3-6f74cf6a8116");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard  data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">

        <ProductList title="Featured products" items={products} />

       
      </div>
    </Container>
  );
};

export default HomePage;
