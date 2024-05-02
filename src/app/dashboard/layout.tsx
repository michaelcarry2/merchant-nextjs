import Sidebar from "../../components/Sidebar";
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
        <aside className=" fixed left-0 top-0 h-screen bg-white z-20 md:h-full  md:flex " >
          <Sidebar />
        </aside>

        <main className="min-h-full ml-72  max-md:ml-0  mt-12 w-full md:w-screen  z-0">

          {children}


        </main>
      </div>
    </section>
  );
}
