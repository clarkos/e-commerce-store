import Link from "next/link";

import Container from "@/components/ui/Container";
import MainNav from  "@/components/MainNav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/NavbarActions";
import Image from "next/image";

const Navbar = async () => {
  
  const categories = await getCategories();
  
  return (
    <div className="border-b">
    <Container>
      <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          {/* <Image src="/logo.png" alt="ModernLooks" width={30} height={30} /> */}
          <p className="font-logo font-medium uppercase text-xl">modern<strong>looks</strong></p>
        </Link>
        <MainNav data={categories} />
        <NavbarActions />
      </div>
    </Container>
    </div>
  );
};

export default Navbar;
