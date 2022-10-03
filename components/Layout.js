import Nav from "./Nav";

const Layout = ({ children }) => {
    return (
        <div className="lg:mx-14 md:mx-7 mx-4">
            <Nav/>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
