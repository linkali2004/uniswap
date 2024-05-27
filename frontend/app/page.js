"use client";

import Head from "next/head";
import Navbar from "./../components/Navbar.jsx";
import SwapSection from "./../components/SwapSection.jsx";
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {config} from "../components/config.js";
import { useMediaQuery } from "@mui/material";
import CoinContextProvider from "@/context/CoinContext.jsx";

const queryClient = new QueryClient();


export  default function Home() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <CoinContextProvider>
          <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
    <div style={{paddingTop:isSmallScreen?"25px":"70px"}}>
         <Head>
   <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
   </Head>
   <Navbar></Navbar>
   <SwapSection></SwapSection>
    </div>
    </QueryClientProvider>
    </WagmiProvider>
    </CoinContextProvider>
  );
}
