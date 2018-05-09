import Header from "./Header";
import Footer from "./Footer";

const layoutStyle = {
    padding: 20,
    maxWidth: 950,
    marginRight: 'auto',
    marginLeft: 'auto',
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header mainNav={props.mainNav}/>
        {props.children}
        <Footer />
    </div>
);

export default Layout;
