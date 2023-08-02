import Link from "next/link";

import Container from "@/components/ui/Container";
import MainNav from  "@/components/MainNav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/NavbarActions";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";

const Navbar = async () => {
  
  const categories = await getCategories();
  
  return (
    <div className="border-b">
    <Container>
      <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          <p className="font-logo font-medium uppercase text-xl">
            modern<span className="dark:text-gray-600 font-extrabold">looks</span></p>
        </Link>
        <MainNav data={categories} />
        <NavbarActions />
        <MobileMenu data={categories} />
      </div>
    </Container>
    </div>
  );
};

export default Navbar;
