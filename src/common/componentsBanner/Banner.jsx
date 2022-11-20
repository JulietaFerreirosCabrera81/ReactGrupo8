import { NavBar } from "../componentsNavBar/NavBar";
import { BannerContainer } from "./styles/BannerContainer";

export const Banner = ({data})=>{
   
    return (
        <BannerContainer image={data?.backdrop} >
            <NavBar/>    
        </BannerContainer>
    );
}