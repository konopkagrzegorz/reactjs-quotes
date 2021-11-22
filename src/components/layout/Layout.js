import { Fragment } from "react";
import classes from "./Layout.module.css"
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
    return (
        <Fragment>
            <MainNavigation>
            </MainNavigation>
            <main className={classes.name}>{props.children}</main>
        </Fragment>
    );
}

export default Layout;