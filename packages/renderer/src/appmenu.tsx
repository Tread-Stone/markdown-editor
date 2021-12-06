import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'

const AppMenu: React.FC = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }

  return (
    <List component="nav" className={classes.appMenu} disablePadding>

      <ListItem button onClick={handleClick} className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <IconLibraryBooks />
        </ListItemIcon>
        <ListItemText primary="Notes" />
        {open ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="Note 1" />
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="Note 2" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
      color: '#abb2bf',
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default AppMenu

