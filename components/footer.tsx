import { Instagram, Twitter, Mail } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className=" flex flex-row gap-4  justify-center items-center  mt-9">
        <Instagram size={30} />
        <Twitter size={30} />
        <Mail size={30} />
      </div>
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black ">
          &copy; 2024 Moon Abayas , Inc. All rights reserved;
        </p>
      </div>
    </footer>
  );
};

export default Footer;
