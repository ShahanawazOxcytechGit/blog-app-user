"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  DocumentIcon,
  UserIcon,
  PaperAirplaneIcon,
  CircleStackIcon,
  CurrencyDollarIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const [isCustomerOpen, setIsCustomerOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isItemOpen, setItemOpen] = useState(false);
  const [isSalesOpen, setIsSalesOpen] = useState(false);
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);

  const handleCustomerClick = () => {
    setIsCustomerOpen(!isCustomerOpen);
  };
  const handleBlogClick = () => {
    setIsBlogOpen(!isBlogOpen);
  };
  const handleSalesClick = () => {
    setIsSalesOpen(!isSalesOpen);
  };
  const handlePurchaseClick = () => {
    setIsPurchaseOpen(!isPurchaseOpen);
  };
  const handleItemClick = () => {
    setItemOpen(!isItemOpen);
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={`p-5 min-h-screen ${
        toggleCollapse ? "w-20" : "w-80"
      } transition-all duration-[400ms] bg-white shadow-[0px_5px_20px_lightgray] border-r-2 border-gray-200`}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}>
      <div className="flex items-center justify-between relative">
        <div className={`text-3xl font-bold ${toggleCollapse ? "invisible" : ""}`}>Logo</div>
        {isCollapsible && (
          <button className={`p-2 rounded bg-gray-100 absolute right-0 ${toggleCollapse ? "rotate-180" : ""}`} onClick={handleSidebarToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
          </button>
        )}
      </div>

      <div className="flex flex-col gap-2 mt-5">
        <Link href="/invoice">
          <div
            className={`px-2 py-1 rounded cursor-pointer flex items-center transition-colors ${
              window.location.pathname == "/invoice" ? "bg-gray-100 " : "text-gray-400 hover:bg-gray-100 "
            }`}>
            <HomeIcon className="h-5 w-5 mr-2" />
            {!toggleCollapse && <div>Reports</div>}
          </div>
        </Link>

        <div
          className={`px-2 py-1 rounded cursor-pointer flex items-center justify-between transition-colors 
            ${
              window.location.pathname == "/invoice/add-customer" || window.location.pathname == "/invoice/all-customer"
                ? "bg-gray-100"
                : "text-gray-400"
            } hover:bg-gray-100`}
          onClick={handleCustomerClick}>
          <div className="flex items-center">
            <UserIcon className="h-5 w-5 mr-2" />
            {!toggleCollapse && <div>Customer 1</div>}
          </div>
          <ChevronRightIcon className={`h-3 w-3 ${isCustomerOpen ? "rotate-90" : ""}`} />
        </div>
        {isCustomerOpen && (
          <>
            <div className="ml-7">
              <Link href="/invoice/add-customer">
                <div
                  className={`px-2 py-1 rounded cursor-pointer flex items-center transition-colors ${
                    window.location.pathname == "/add-customer" ? "bg-gray-100 " : "text-gray-400 hover:bg-gray-100 "
                  }`}>
                  <PaperAirplaneIcon className="h-3 w-3 mr-2" />
                  <div className="text-sm">Add Customer 1</div>
                </div>
              </Link>
            </div>
            <div className="ml-7">
              <Link href="/invoice/all-customer">
                <div
                  className={`px-2 py-1 rounded cursor-pointer flex items-center transition-colors ${
                    window.location.pathname == "/all-customer" ? "bg-gray-100 " : "text-gray-400 hover:bg-gray-100 "
                  }`}>
                  <PaperAirplaneIcon className="h-3 w-3 mr-2" />
                  <div className="text-sm">All Customer 1</div>
                </div>
              </Link>
            </div>
          </>
        )}





       <div
          className={`px-2 py-1 rounded cursor-pointer flex items-center justify-between transition-colors 
            ${
              window.location.pathname == "/invoice/add-blog" || window.location.pathname == "/invoice/all-blog"
                ? "bg-gray-100"
                : "text-gray-400"
            } hover:bg-gray-100`}
          onClick={handleBlogClick}>
          <div className="flex items-center">
            <UserIcon className="h-5 w-5 mr-2" />
            {!toggleCollapse && <div>Blog</div>}
          </div>
          <ChevronRightIcon className={`h-3 w-3 ${isBlogOpen ? "rotate-90" : ""}`} />
        </div>
        {isBlogOpen && (
          <>
            <div className="ml-7">
              <Link href="/invoice/add-blog">
                <div
                  className={`px-2 py-1 rounded cursor-pointer flex items-center transition-colors ${
                    window.location.pathname == "/add-blog" ? "bg-gray-100 " : "text-gray-400 hover:bg-gray-100 "
                  }`}>
                  <PaperAirplaneIcon className="h-3 w-3 mr-2" />
                  <div className="text-sm">Add Blog</div>
                </div>
              </Link>
            </div>
            <div className="ml-7">
              <Link href="/invoice/all-blog">
                <div
                  className={`px-2 py-1 rounded cursor-pointer flex items-center transition-colors ${
                    window.location.pathname == "/all-blog" ? "bg-gray-100 " : "text-gray-400 hover:bg-gray-100 "
                  }`}>
                  <PaperAirplaneIcon className="h-3 w-3 mr-2" />
                  <div className="text-sm">All Blog</div>
                </div>
              </Link>
            </div>
          </>
        )}







        <div
          className={`px-2 py-1 rounded cursor-pointer flex items-center justify-between transition-colors ${
            window.location.pathname == "/item" ? "bg-gray-100 " : "text-gray-400 hover:bg-gray-100 "
          }`}
          onClick={handleItemClick}>
          <div className="flex items-center">
            <CircleStackIcon className="h-5 w-5 mr-2" />
            {!toggleCollapse && <div>Item</div>}
          </div>
          <ChevronRightIcon className={`h-3 w-3 ${isItemOpen ? "rotate-90" : ""}`} />
        </div>
        {isItemOpen && (
          <>
            <div className="ml-7">
              <Link href="/item">
                <div
                  className={`px-2 py-1 rounded cursor-pointer flex items-center transition-colors ${
                    window.location.pathname == "/item" ? "bg-gray-100 " : "text-gray-400 hover:bg-gray-100 "
                  }`}>
                  <PaperAirplaneIcon className="h-3 w-3 mr-2" />
                  <div className="text-sm">Add Item 1</div>
                </div>
              </Link>
            </div>
            <div className="ml-7">
              <Link href="/itemall">
                <div
                  className={`px-2 py-1 rounded cursor-pointer flex items-center transition-colors ${
                    window.location.pathname == "/itemall" ? "bg-gray-100 " : "text-gray-400 hover:bg-gray-100 "
                  }`}>
                  <PaperAirplaneIcon className="h-3 w-3 mr-2" />
                  <div className="text-sm">All Item 1</div>
                </div>
              </Link>
            </div>
          </>
        )}

        <div
          className={`px-2 py-1 rounded cursor-pointer flex items-center justify-between transition-colors ${
            window.location.pathname == "/" ? "bg-gray-100 " : "text-gray-400 hover:bg-gray-100 "
          }`}
          onClick={handleSalesClick}>
          <div className="flex items-center">
            <CurrencyDollarIcon className="h-5 w-5 mr-2" />
            {!toggleCollapse && <div>Sales</div>}
          </div>
          <ChevronRightIcon className={`h-3 w-3 ${isSalesOpen ? "rotate-90" : ""}`} />
        </div>
        {isSalesOpen && (
          <>
            <div className="ml-7">
              <Link href="/add-sales-invoice">
                <div
                  className={`px-2 py-1 rounded cursor-pointer flex items-center transition-colors ${
                    window.location.pathname == "/add-sales-invoice" ? "bg-gray-100 " : "text-gray-400 hover:bg-gray-100 "
                  }`}>
                  <PaperAirplaneIcon className="h-3 w-3 mr-2" />
                  <div className="text-sm">Add Sales Invoice</div>
                </div>
              </Link>
            </div>
            <div className="ml-7">
              <Link href="/all-sales-invoice">
                <div
                  className={`px-2 py-1 rounded cursor-pointer flex items-center transition-colors ${
                    window.location.pathname == "/all-sales-invoice" ? "bg-gray-100 " : "text-gray-400 hover:bg-gray-100 "
                  }`}>
                  <PaperAirplaneIcon className="h-3 w-3 mr-2" />
                  <div className="text-sm">All Sales Invoice</div>
                </div>
              </Link>
            </div>
            <div className="ml-7">
              <Link href="/estimation">
                <div
                  className={`px-2 py-1 rounded cursor-pointer flex items-center transition-colors ${
                    window.location.pathname == "/estimation" ? "bg-gray-100 " : "text-gray-400 hover:bg-gray-100 "
                  }`}>
                  <PaperAirplaneIcon className="h-3 w-3 mr-2" />
                  <div className="text-sm">Estimation</div>
                </div>
              </Link>
            </div>
          </>
        )}

        <div
          className={`px-2 py-1 rounded cursor-pointer flex items-center justify-between transition-colors ${
            window.location.pathname == "/" ? "bg-gray-100 " : "text-gray-400 hover:bg-gray-100 "
          }`}
          onClick={handlePurchaseClick}>
          <div className="flex items-center">
            <DocumentIcon className="h-5 w-5 mr-2" />
            {!toggleCollapse && <div>Purchase</div>}
          </div>
          <ChevronRightIcon className={`h-3 w-3 ${isPurchaseOpen ? "rotate-90" : ""}`} />
        </div>
        {isPurchaseOpen && (
          <>
            <div className="ml-7">
              <Link href="/add-purchase-invoice">
                <div
                  className={`px-2 py-1 rounded cursor-pointer flex items-center transition-colors ${
                    window.location.pathname == "/add-purchase-invoice" ? "bg-gray-100 " : "text-gray-400 hover:bg-gray-100 "
                  }`}>
                  <PaperAirplaneIcon className="h-3 w-3 mr-2" />
                  <div className="text-sm">Add Purchase Invoice</div>
                </div>
              </Link>
            </div>
            <div className="ml-7">
              <Link href="/all-purchase-invoice">
                <div
                  className={`px-2 py-1 rounded cursor-pointer flex items-center transition-colors ${
                    window.location.pathname == "/all-purchase-invoice" ? "bg-gray-100 " : "text-gray-400 hover:bg-gray-100 "
                  }`}>
                  <PaperAirplaneIcon className="h-3 w-3 mr-2" />
                  <div className="text-sm">All Purchase Invoice</div>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
