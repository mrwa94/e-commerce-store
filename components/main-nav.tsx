
'use client'

import { cn } from "@/lib/utils";
import { Category } from "@/type";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface MainNavProps {
    data:Category[]
}
const MainNav:React.FC<MainNavProps> = ({data}) => {
    const pathName = usePathname();
    const routes = data.map((route:any)=> ({
        href:`/category/${route.id}`,
        label: route.name,
        active: pathName=== `/category/${route.id}`
    }))




  return <div>
    {routes.map((route:any)=>(
        <Link key={route.href} href={route.href} className={cn("text-sm font-medium p-3 transition-colors hover:text-black",route.active?"text-black":" text-neutral-500")}>
        {route.label}
        </Link>
    ))}


    
  </div>;
};

export default MainNav;
