"use client";

import Head from "next/head";
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {config} from "../components/config.js";
import CoinContextProvider from "@/context/CoinContext.jsx";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";


import SwapPage from "@/components/SwapPage.jsx";
import Layout from "@/components/Layout.jsx";
import TokenPage from "@/components/TokenPage.jsx";
import PoolPage from "@/components/PoolPage.jsx";

const queryClient = new QueryClient();


export  default function Home() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <SwapPage></SwapPage>
        },
        {
          path: "/token",
          element: <TokenPage />
        },
        {
          path: "/swap",
          element: <SwapPage></SwapPage>
        },
        {
          path:"/pool",
          element:<PoolPage></PoolPage>
        }
      ]
    }
  ]);
  return (
    <CoinContextProvider>
          <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
         <Head>
   <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
   </Head>
   <RouterProvider router={router}>
    </RouterProvider>
    </QueryClientProvider>
    </WagmiProvider>
    </CoinContextProvider>
  );
}
