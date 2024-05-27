import BooToken from "./BooToken.json";
import ERC20Life from "./ERC20Life.json";
import IWETH from "./IWETH.json";
import singleSwapInput from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";

const BooAbi = BooToken.abi;
const LifeAbi = ERC20Life.abi;
const swapSingleInput = singleSwapInput.abi;
const Iweth = IWETH.abi;
const SwapMultiHop = swapMultiHop.abi;

export {BooAbi,LifeAbi,swapSingleInput,Iweth,SwapMultiHop};