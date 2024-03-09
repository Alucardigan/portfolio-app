import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/breadcrumb";

export function NavBar(){
    let NavItems = [{name:"Home"},{name:"About"},{name:"Contacts"}]
    return (
    <Breadcrumb>
        {NavItems.map((item)=>(<BreadcrumbItem>
        <BreadcrumbLink href="#">{item.name}
        </BreadcrumbLink></BreadcrumbItem>))}
      </Breadcrumb>
    );
    
}