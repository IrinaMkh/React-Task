import clsx from "clsx";
import {Box, Card, CardActions, CardMedia, Typography} from "@material-ui/core";
import React from "react";

export default function Content({
                                 contentName,
                                 classes,
                                 contentDescription,
                                 contentData,
                                 open
                             }) {

    return (
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}
        >
            <div className={classes.drawerHeader} />
            <Box mb={2}>
                <Typography variant="h6">
                    {contentName}
                </Typography>
            </Box>
            <Typography paragraph>
                {contentDescription}
            </Typography>
            <Box display='flex' flexWrap="wrap" width="100%">
                {contentData.map(it =>
                    <Card className={classes.cardStyle} key={it.id}>
                        <CardMedia
                            className={classes.media}
                            image={it.url}
                            title="Paella dish"
                        />

                        <CardActions>
                            <Box width="180px" color="white"> <Typography variant="caption">{it.title}</Typography></Box>
                            <button variant="outlined"
                                    className={classes.buttonStyle}>Add</button>
                        </CardActions>

                    </Card>
                )}
            </Box>

        </main>
    )
}