"use client";

import Image from "next/image";
import { Auth, Modal, OffCanvas, ProductCart, Search } from "..";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/store";
import "./Navbar.scss";
import { MenuLinks } from "./MenuLinks";
import Link from "next/link";
const Navbar = () => {
  const [cartOffCanvas, setCartOffCanvas] = useState<boolean>(false);
  const [menuOffCanvas, setMenuOffCanvas] = useState<boolean>(false);
  const { products, total } = useAppSelector((state: any) => state.cart);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [authOpen, setAuthOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`navbar ${scrolled && "stickyNav"}`}>
      <div className="container">
        <div className="navbar-content" onClick={(e) => e.stopPropagation()}>
          <div className="navbar-content-left ">
            <Link href="/" className="navbar-content-left-logo">
              Guza
            </Link>
            <ul className="navbar-content-left-menu">
              {MenuLinks.map((link) => (
                <Link key={link.id} href={link.link}>
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
          <div className="navbar-content-right">
            <Image
              src="/icons/search.svg"
              width={24}
              height={24}
              alt="search"
              className=" cursor-pointer"
              onClick={() => setSearchOpen(true)}
            />
            <Image
              src="/icons/account.svg"
              width={24}
              height={24}
              alt="account"
              onClick={() => setAuthOpen(true)}
              className=" cursor-pointer"
            />
            <Image src="/icons/heart.svg" width={24} height={24} alt="search" />
            <div
              className="relative cursor-pointer"
              onClick={() => setCartOffCanvas(true)}
            >
              <Image src="/icons/cart.svg" width={24} height={24} alt="cart" />
              <span className=" navbar-content-right-counter">
                {products.length}
              </span>
            </div>
            <Image
              src="/icons/menu.svg"
              width={24}
              height={24}
              alt="menu"
              className="md:hidden"
              onClick={() => setMenuOffCanvas(true)}
            />
          </div>
        </div>
      </div>

      {cartOffCanvas && (
        <OffCanvas
          isOpen={cartOffCanvas}
          setOpen={setCartOffCanvas}
          title={`your cart (${products.length})`}
        >
          {products.length ? (
            <>
              {products.map((pro: any, index: number) => (
                <ProductCart key={index} product={pro} />
              ))}
              <div className="border-t mt-auto py-4 my-6">
                <div className="flex justify-between mb-3">
                  <span className=" font-JostBold capitalize">Subtotal:</span>
                  <span className=" font-JostBold text-shadow">${total}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <Link
                    href="/cart"
                    className="btn-outline w-1/2"
                    onClick={() => setCartOffCanvas(false)}
                  >
                    view Cart
                  </Link>
                  <Link
                    href="/checkout"
                    className="btn-primary w-1/2"
                    onClick={() => setCartOffCanvas(false)}
                  >
                    Check out
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <p>not products added</p>
          )}
        </OffCanvas>
      )}

      <Modal isOpen={authOpen} setOpen={setAuthOpen}>
        <Auth />
      </Modal>

      <Modal isOpen={searchOpen} setOpen={setSearchOpen} position="top">
        <Search />
      </Modal>

      {menuOffCanvas && (
        <OffCanvas
          isOpen={menuOffCanvas}
          setOpen={setMenuOffCanvas}
          title={`Menu`}
        >
          <ul className="flex flex-col gap-3">
            {MenuLinks.map((link) => (
              <Link key={link.id} href={link.link}>
                {link.name}
              </Link>
            ))}
          </ul>
        </OffCanvas>
      )}
    </nav>
  );
};

export default Navbar;
