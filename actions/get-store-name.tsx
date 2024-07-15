import { Store } from "@/type";

const getStore = async():Promise<Store[]>=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);

    return res.json();
}

export default getStore

