import { BannerContainer } from "./styles/BannerContainer";
import { CONSTANTS } from "../../utils/constants";
import { NavBar } from "../componentsNavBar/NavBar";


 export const Banner = ({data})=>{
   
    return (
        <BannerContainer image={data?.backdrop} >
            <NavBar color={CONSTANTS.colors.primary}/>     
        </BannerContainer>
    );
}