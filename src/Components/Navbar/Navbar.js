import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { Link } from 'react-router-dom'
import { Link as MaterialLink } from '@material-ui/core'
import { useAuth0 } from '../../react-auth0-spa'

const Navbar = () => {
	const classes = useStyles()
	const [open, setOpen] = React.useState(false)
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0()
	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						onClick={handleDrawerOpen}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						<MaterialLink
							component={Link}
							to="/"
							color="inherit"
							className={classes.link}
						>
							Magic The Deck Builder
						</MaterialLink>
					</Typography>
					{!isAuthenticated && (
						<Button
							color="inherit"
							onClick={() => loginWithRedirect()}
						>
							Login
						</Button>
					)}
					{isAuthenticated && (
						<Button onClick={() => logout()} color="inherit">
							Logout
						</Button>
					)}
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>
					<ListItem button key="0" component={Link} to="/all">
						<ListItemText primary="All Cards" />
					</ListItem>
					<ListItem button key="1" component={Link} to="/mydecks">
						<ListItemText primary="My Decks" />
					</ListItem>
					<ListItem button key="2" component={Link} to="/random">
						<ListItemText primary="Random Card" />
					</ListItem>
					<Divider />
					<ListItem button key="3" component={Link} to="/account">
						<ListItemText primary="Account" />
					</ListItem>
				</List>
			</Drawer>
		</div>
	)
}

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},

	title: {
		flexGrow: 1,
		textDecoration: 'inherit'
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	}
}))

export default Navbar
