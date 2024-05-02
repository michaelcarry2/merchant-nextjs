import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import * as React from "react";
import './design.css';

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
            <div className="w-full bg-white z-30">
        <Navbar />
      </div>
      <main className="min-h-full max-md:ml-0 w-full md:w-screen  z-0">

          {children}


        </main>
    </section>
  );
}
