import {Divider, Drawer, IconButton, List, ListItem, ListItemText} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import React from "react";

export default function Menu({
                                 getDataContent,
                                 classes,
                                 handleDrawerClose,
                                 theme,
                                 categoriesList,
                                 open
                             }) {

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon style={{color: 'white'}}/> :
                        <ChevronRightIcon style={{color: 'white'}}/>}
                </IconButton>
            </div>
            <Divider/>
            <List>
                {categoriesList.contents && categoriesList.contents.map((item, index) => (
                    <React.Fragment key={item.catName}>
                        <ListItem button onClick={getDataContent(item)}>
                            <ListItemText primary={item.catName} style={{color: 'white'}}/>
                        </ListItem>
                        <Divider style={{backgroundColor: 'grey'}}/>
                    </React.Fragment>
                ))}
            </List>
        </Drawer>
    )
}