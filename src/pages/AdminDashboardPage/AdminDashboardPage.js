import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AllOrdersAdmin from './AllOrdersAdmin/AllOrdersAdmin';
import AddProductAdmin from './AddProductAdmin/AddProductAdmin';
import ManageProductsAdmin from './ManageProductsAdmin/ManageProductsAdmin';
import AllUsersAdmin from './AllUsersAdmin/AllUsersAdmin';

const drawerWidth = 240;

function AdminDashboardPage(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { logOut } = useAuth();
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className="raleway">
            <Toolbar />
            <Divider />
            <List>
                <Link to={`${url}`} className="text-decoration-none">
                    <ListItem button>
                        <ListItemIcon sx={{ color: '#000000' }}>
                            <i className="fas fa-box-open"></i>
                        </ListItemIcon>
                        <span className="text-decoration-none text-dark fw-500">All Orders</span>
                    </ListItem>
                </Link>
                <Link to={`${url}/add-product`} className="text-decoration-none">
                    <ListItem button>
                        <ListItemIcon sx={{ color: '#000000' }}>
                            <i className="fas fa-dolly"></i>
                        </ListItemIcon>
                        <span className="text-decoration-none text-dark fw-500">Add Product</span>
                    </ListItem>
                </Link>
                <Link to={`${url}/manage-products`} className="text-decoration-none">
                    <ListItem button>
                        <ListItemIcon sx={{ color: '#000000' }}>
                            <i className="fas fa-people-carry"></i>
                        </ListItemIcon>
                        <span className="text-decoration-none text-dark fw-500">Manage Products</span>
                    </ListItem>
                </Link>
                <Link to={`${url}/all-users`} className="text-decoration-none">
                    <ListItem button>
                        <ListItemIcon sx={{ color: '#000000' }}>
                            <i className="fas fa-users"></i>
                        </ListItemIcon>
                        <span className="text-dark fw-500">All Users</span>
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <Link to="/" className="text-decoration-none">
                    <ListItem button>
                        <ListItemIcon sx={{ color: '#000000' }}>
                            <i className="fas fa-home"></i>
                        </ListItemIcon >
                        <span className="text-dark fw-500">Home</span>
                    </ListItem>
                </Link>
                <Link to="/explore-all-products" className="text-decoration-none">
                    <ListItem button>
                        <ListItemIcon sx={{ color: '#000000' }}>
                            <i className="fas fa-cubes"></i>
                        </ListItemIcon>
                        <span className="text-dark fw-500">Explore</span>
                    </ListItem>
                </Link>
                <span onClick={logOut} className="text-decoration-none text-dark">
                    <ListItem button>
                        <ListItemIcon sx={{ color: '#000000' }}>
                            <i className="fas fa-power-off"></i>
                        </ListItemIcon>
                        <span className="text-dark fw-500">Log out</span>
                    </ListItem>
                </span>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} className="raleway">
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    background: '#F5F6F7'
                }}
            >
                <Toolbar sx={{ background: '#000' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <span className="raleway">Admin Dashboard</span>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`, background: '#F5F6F7' } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <AllOrdersAdmin></AllOrdersAdmin>
                    </Route>
                    <Route path={`${path}/add-product`}>
                        <AddProductAdmin></AddProductAdmin>
                    </Route>
                    <Route path={`${path}/manage-products`}>
                        <ManageProductsAdmin></ManageProductsAdmin>
                    </Route>
                    <Route path={`${path}/all-users`}>
                        <AllUsersAdmin></AllUsersAdmin>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

AdminDashboardPage.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default AdminDashboardPage;
