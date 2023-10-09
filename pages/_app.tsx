import type { AppProps } from "next/app";
import { ThirdwebProvider, paperWallet, smartWallet, metamaskWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId= {process.env.NEXT_PUBLIC_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
        metamaskWallet(),
        smartWallet({
          factoryAddress: "0x4E6b6f3dfF9faC105BCC55A48A4c2C8941cfaf97",
          gasless: true,
          personalWallets: [
            paperWallet({
              paperClientId: "e046b7e7-69e0-44d1-b297-39a21e8130‹",
            }),
            metamaskWallet()
          ]
        })
        
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
