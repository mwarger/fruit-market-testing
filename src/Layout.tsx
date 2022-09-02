import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import ShoppingListIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const navItems = [
	{ title: 'Product List', to: '/product-list', icon: <ListIcon /> },
	{ title: 'Cart', to: '/cart', icon: <ShoppingListIcon /> },
];

export function Layout(props: { children: React.ReactNode }) {
	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
			>
				<Toolbar>
					<Typography variant='h6' noWrap component='div'>
						Fruit Market
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant='permanent'
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: 'auto' }}>
					<List>
						{navItems.map((item, index) => (
							<ListItem key={item.title} disablePadding>
								<ListItemButton component={Link} to={item.to}>
									<ListItemIcon>{item.icon}</ListItemIcon>
									<ListItemText primary={item.title} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
			<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				{props.children}
			</Box>
		</Box>
	);
}
