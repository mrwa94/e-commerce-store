"use client";
import { TabGroup, TabList, TabPanel } from "@headlessui/react";
import { Image as ImageType } from "@/type";
import Image from "next/image";
import GalleryTab from "./galleryTab";

import { Fragment } from 'react'

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanel className="aspect-square w-full ">
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className=" aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                fill
                src={image.url}
                alt="product image"
                className="object-cover object-center"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanel>
    </TabGroup>
  );
};
export default Gallery;
