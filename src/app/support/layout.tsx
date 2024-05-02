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
      <Navbar/>

      <div className="min-h-full py-4">
                <div className="lg:flex max-md:flex-none">
                    <Sidebar />
                    <div className="flex flex-col flex-grow w-screen md:w-screen min-h-full">
                        {children}
                    </div>
                </div>
            </div>
    </section>
  );
}
