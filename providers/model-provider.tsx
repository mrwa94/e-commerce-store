"use client";

import { useEffect, useState } from "react";
import PreviewModel from "@/components/preview-model";

const ModelProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModel />
    </>
  );
};

export default ModelProvider;
