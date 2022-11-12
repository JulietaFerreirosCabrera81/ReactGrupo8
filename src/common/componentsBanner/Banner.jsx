import { BannerContainer } from "./styles/BannerContainer";
import { Type } from "./components/Type";
import { Image } from "./components/Image";
import { Classification } from "./components/Classification";
import { Buttons } from "./components/Buttons";
import { Descript } from "./components/Descript";
import { Title } from "./components/Title";

 export const Banner = ({data})=>{
   
    return (
        
        <BannerContainer image={data?.backdrop} >
            <div style={{
                display: "flex",
                flexdirection:"row",
                justifycontent: "space-between",
                width: "100%",
                height:"20%",
                color:"black",
            }}>
                <Image />
                <Type />
                <Title />
                <Descript />
                <Classification />
                <Buttons />  
            </div>    
        </BannerContainer>
    );
}