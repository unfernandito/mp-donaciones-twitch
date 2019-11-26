import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Drawer, List, ListItem, ListItemText} from '@material-ui/core/';
import {browserHistory} from '../../App'

const drawerWidth = 240;

const ROUTES = [{
    title: 'Donaciones', route: '/dashboard'
}, {
    title: 'Autorizaciones',route: '/dashboard/authorizations'
}, {
    title: 'Configuraciones', route: '/dashboard/settings'
}, {
    title: 'Cuenta', route: '/dashboard/account'
}, {
    title: 'Salir',
    route: '/'
}]

const useStyles = makeStyles(theme => ({
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    }
  }));

function Sidebar({title}){
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar} />
            <h4>{title}</h4>
            <List>
            {ROUTES.map((route, index) => (
                <ListItem button key={route.title} onClick={() => browserHistory.push(route.route)}>
                    <ListItemText primary={route.title} />
                </ListItem>
            ))}
            </List>
      </Drawer>
    )
}

export default Sidebar