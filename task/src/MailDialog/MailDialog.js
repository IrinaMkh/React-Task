import {
    Box,
    Button, Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, FormControlLabel, FormLabel,
    Grid,
    IconButton, Radio, RadioGroup, TextField,
    Typography
} from "@material-ui/core";
import {useState} from "react";
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import {withStyles} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const maxWidth = 'md';

export default function MailDialog({handleClose, openDialog}) {
    const [value, setValue] = useState(null);
    const [checked, setChecked] = useState(null);
    const [emailData, setEmailData] = useState(null);
    const styles = (theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
        textStyle: {
            marginTop: 13
        }
    });

    const DialogTitle = withStyles(styles)((props) => {
        const {children, classes, onClose, ...other} = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root} {...other}>
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <CloseIcon/>
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
    });

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleChangeChecked = (event) => {
        setChecked(event.target.checked);
    };
    const setEmail = (ev) => {
        setEmailData(ev.target.value)
    }
    const sentEmail = () => {
        alert('Successfully sent')
    }
    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title"
                maxWidth={maxWidth} open={openDialog} fullWidth>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Contact information
            </DialogTitle>
            <DialogContent dividers>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <TextField required label="First Name" fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField required label="LastName" fullWidth/>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <TextField required label="Company" fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField required label="Job Title" fullWidth/>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <TextField required id="standard-required" onChange={setEmail}
                                   label="Email" fullWidth
                                   value={emailData || ''}/>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        I agree to receive emailed reports, articles and event invitations. I
                        understand I may unsubscribe at any time by clicking the link included in emails.
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value="yes" color="default" control={<Radio/>} label="Yes"/>
                            <FormControlLabel value="no" color="default" control={<Radio/>} label="No"/>
                        </RadioGroup>
                    </Grid>
                </Grid>
                <Box display="flex">

                    <FormControlLabel
                        control={<Checkbox checked={checked} onChange={handleChangeChecked} name="checked"/>}
                    />
                    <FormLabel component="legend" className={styles.textStyle}>The submission of personal information
                        through this page is subject to Deloitt's
                        <Link href="#">Privacy Statement</Link>
                        and <Link href="#">Legal Terms</Link></FormLabel>
                </Box>

            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="secondary">
                    Reset
                </Button>
                <Button autoFocus onClick={sentEmail} color="primary"
                        disabled={!emailData}
                        variant="contained">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}