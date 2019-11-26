import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../Sidebar'

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
    },
  }));

export default function DashboardLayout({title, children}){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Sidebar title={title} />
            <main className={classes.content}>
                <div className={classes.toolbar} >
                    {children}
                </div>
            </main>
        </div>
    )
}