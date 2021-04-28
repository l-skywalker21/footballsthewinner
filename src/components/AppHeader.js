import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class AppHeader extends React.Component {
    constructor(props) {
        super(props);
        this.styles = makeStyles((theme) => ({
            root: {
              flexGrow: 1,
            },
            menuButton: {
              marginRight: theme.spacing(2),
            },
            title: {
              flexGrow: 1,
            },
          }));
    }
    render() {

        return (
            <div className={this.styles.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={this.styles.title}>
                            Football's The Winner
                        </Typography>
                        <Typography variant="h7" className={this.styles.title} style={{marginLeft: 'auto'}}>
                            A blog for all things football
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}