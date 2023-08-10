import Navigation from "../Components/Navigation/Navigation";

const Layout = ({children}) => {
    return ( <div>
        <header>
<Navigation/>
        </header>
        {children}
    </div> );
}
 
export default Layout;