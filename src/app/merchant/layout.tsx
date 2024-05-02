import SidebarMerchant from "../../components/SidebarMerchant";
import Navbar from "../../components/Navbar";
import * as React from "react";
export default function MerchantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
   <div className="w-full fixed bg-white z-30">
        <Navbar />
      </div>
      <div className="flex">
        <aside className=" fixed left-0 top-0 h-screen bg-white z-20 md:h-full hidden md:flex " >
          <SidebarMerchant />
        </aside>

        <main className="min-h-full ml-72  max-md:ml-0  mt-12 w-full md:w-screen min-h-full z-0">

          {children}


        </main>
      </div>
    </section>
  );
}
