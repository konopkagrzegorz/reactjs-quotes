import { Fragment } from "react/cjs/react.production.min";
import classes from "./Layout.module.css"
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
    return (
        <Fragment>
            <MainNavigation>
                <main className={classes.name}>{props.children}</main>
            </MainNavigation>
        </Fragment>
    );
}

export default Layout;