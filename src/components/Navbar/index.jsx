import {
    SearchBar, 
    LogoContainer,
    SearchContainer,
    Nav, 
    NavbarContainer, 
    NavItem, 
    NavLinks, 
    NavLogo, 
    NavMenu,
    ImageLogo} from "./NavbarSelements";


const Navbar = ({onSearch}) => {

    return (
        <>
            <Nav>
             <NavbarContainer>

               <LogoContainer>
                 <ImageLogo></ImageLogo>
                 <NavLogo to='/'>Weather-Web</NavLogo>
               </LogoContainer> 

                <SearchContainer>
                 <SearchBar onSearch={onSearch}></SearchBar>
                </SearchContainer>
            
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/contact'>Contacto</NavLinks>
                    </NavItem>                   
                </NavMenu>

             </NavbarContainer>  
            </Nav>  
        </>
    )
}

export default Navbar;
