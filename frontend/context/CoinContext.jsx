import * as React from 'react';
import { getContractsforSwap , getAllTokensName} from "@/utils/appFeature";
import { getPrice } from '@/utils/fetchingPrice';
import { swapUpdatePrice } from '@/utils/swapUpdatePrice';
const { createContext, useState } = require("react");

export const CoinContext = createContext();



export default function CoinContextProvider({children}){
    const[allTokens,setAllTokens] = React.useState([]);

    const [btnProp , setBtnProp] = useState({
        firstOne:"WETH",
        secondOne:"DAI"
    });

    async function swapTokens(amount,address)
    {
    //    let a = await getPrice(amount,address);
    let a = await swapUpdatePrice(1,25,10,"0x97f991971a37D4Ca58064e6a98FC563F03A71E5c");
       return a;
    }

    React.useEffect(()=>{
        async function gettokens()
        {
          const temp = await getAllTokensName();
          setAllTokens(temp);
        }
        gettokens();
      },[]);
    
    return (
        <CoinContext.Provider value={{btnProp,setBtnProp,swapTokens,allTokens}}>
            {children}
        </CoinContext.Provider>
    )
}