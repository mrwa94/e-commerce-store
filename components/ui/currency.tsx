"use client";

import { useEffect, useState } from "react";

interface CurrencyProps {
  value: string | number;
}
const formatter = new Intl.NumberFormat("en-Us", {
  style: "currency",
  currency: "SAR",
});

// عرض العملة بالريال السعودي وباستخدام التنسيق العربي.
// const formatter = new Intl.NumberFormat("ar-SA", {
//     style: "currency",
//     currency: "SAR"
// });

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};
export default Currency;
