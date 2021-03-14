import React, {useState} from 'react'
import './App.css';
import Header from './header/header';
import Menu from './Menu/Menu';
import Content from './Content/Content';
import {useTheme} from '@material-ui/core/styles';
import {useEffect} from "react";
import useGlobalStateTask from './store'
import useStyles from "./style"
import MailDialog from "./MailDialog/MailDialog"

import {
    CssBaseline,
} from "@material-ui/core";

function App() {

    const [open, setOpen] = useState(false);
    const [contentData, setContentData] = useState([]);
    const [contentName, setContentName] = useState(null);
    const [contentDescription, setContentDescription] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        getHeaderData();
        getCategoriesList();
        getImages();
    }, [])

    const [{headerData, categoriesList, content, imagesList}, {
        getActions: {
            getHeaderData,
            getCategoriesList,
            getDataByContentId,
            getImages

        }
    }] = useGlobalStateTask();
    useEffect(() => {
        const category = categoriesList.contents && categoriesList.contents[2];
        category && setData(category)
    }, [categoriesList])

    const classes = useStyles();
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);

    };

    const getDataContent = it => (ev) => {
        setData(it)
    }
    const setData = (it) => {
        setContentName(it.catName);
        setContentDescription(it.description);
        const array = [];
        it.contentInf.length && it.contentInf.forEach(item => {
            getDataByContentId(item.id).then(data => {
                array.push(data)
                setContentData(array)
            })
        })
    }

    contentData.forEach(data => imagesList.length && imagesList.forEach(image => {
        if (data.id === image.id) {
            data.url = image.url
        }
    }))
    const handleClickOpenDialog = () => {
        setOpenDialog(true)
    }
    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    return (
        <>
            <Header classes={classes} headerData={headerData}
                    handleDrawerOpen={handleDrawerOpen} open={open}
                    handleClickOpenDialog={handleClickOpenDialog}/>
            <div className={classes.root}>
                <CssBaseline/>
                <Menu getDataContent={getDataContent}
                      classes={classes}
                      handleDrawerClose={handleDrawerClose}
                      theme={theme}
                      categoriesList={categoriesList}
                      open={open}/>
                <Content contentName={contentName}
                         classes={classes}
                         contentDescription={contentDescription}
                         contentData={contentData}
                         open={open}
                />
            </div>
            <MailDialog handleClose={handleCloseDialog} openDialog={openDialog}/>
        </>
    );
}

export default App;
