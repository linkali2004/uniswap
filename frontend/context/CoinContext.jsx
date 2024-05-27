import { getContractsforSwap } from "@/utils/appFeature";

const { createContext, useState } = require("react");

export const CoinContext = createContext();



export default function CoinContextProvider({children}){
    const [btnProp , setBtnProp] = useState({
        firstOne:"WETH",
        secondOne:"DAI"
    });
    async function swapTokens(amount,address)
    {
       let a = await getContractsforSwap(amount,address);
       console.log(a);
       return a;
    }
    
    return (
        <CoinContext.Provider value={{btnProp,setBtnProp,swapTokens}}>
            {children}
        </CoinContext.Provider>
    )
}