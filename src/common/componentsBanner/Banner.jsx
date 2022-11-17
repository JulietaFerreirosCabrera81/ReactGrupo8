import { BannerContainer } from "./styles/BannerContainer";
import { Type } from "./components/Type";
import { Image } from "./components/Image";
import { Classification } from "./components/Classification";
import { Buttons } from "./components/Buttons";
import { Descript } from "./components/Descript";
import { Title } from "./components/Title";
import { CONSTANTS } from "../../utils/constants";
import { NavBar } from "./styles/NavBar";

 export const Banner = ({data})=>{
   
    return (
        
        <BannerContainer image={data?.backdrop} >
            <NavBar color={CONSTANTS.colors.primary}>
                <Image  />
                <Type />
                <Title />
                <Descript />
                <Classification />
                <Buttons /> 
            </NavBar>     
        </BannerContainer>
    );
}