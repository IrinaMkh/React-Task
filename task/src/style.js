import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 240;
// eslint-disable-next-line no-undef

export default  makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: 'black',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        top: '66px',
        backgroundColor: "black",
        borderRight: '1px solid grey'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        backgroundColor: 'black',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        color: 'white'
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    headerStyle: {
        backgroundColor: 'black',
        borderBottom: '1px solid grey'
    },
    cardStyle: {
        width: 226,
        marginLeft: 10,
        backgroundColor: 'black',
    },
    media: {
        height: 0,
        paddingTop: '40%',
    },
    buttonStyle: {
        backgroundColor: 'grey',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        color: 'white'
    },
}));
