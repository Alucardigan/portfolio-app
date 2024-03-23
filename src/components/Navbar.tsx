import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/breadcrumb";

type NavBarProps = {
  fullpageApi: any;
}
export function NavBar({fullpageApi}:NavBarProps){
    let NavItems = [{name:"Home",section:1},{name:"Experience",section:2},{name:"Projects",section:3},{name:"Skills",section:4}]
    return (
    <Breadcrumb>
        {NavItems.map((item)=>(<BreadcrumbItem>
        <BreadcrumbLink href="#" onClick={()=>fullpageApi.moveTo(item.section)}>{item.name}
        </BreadcrumbLink></BreadcrumbItem>))}
      </Breadcrumb>
    );
    
}