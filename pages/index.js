// import type { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image';
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";

export default function Home() {

  const { authenticate, isAuthenticated } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) 
    {
      router.push("/dashboard");
    }
  }, [isAuthenticated]);
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>NFT Minter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button
        onClick={authenticate}
        className="bg-yellow-300 px-8 py-5 rounded-xl text-lg animate-pulse"
      >
        Login using MetaMask
      </button>
    </div>
  )
}

// export default Home
