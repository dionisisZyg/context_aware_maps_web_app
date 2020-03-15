import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    progress: {
        position: 'fixed',
        zIndex: 999,
        height: '2em',
        width: '2em',
        overflow: 'show',
        margin: 'auto',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

class Loading extends React.Component {
    state = {
        completed: 0,
    };

    componentDidMount() {
        this.timer = setInterval(this.progress, 20);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    timer;

    progress = () => {
        const { completed } = this.state;
        this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
    };

    render() {
        if(!this.props.displayLoader) return null;
        const { classes } = this.props;
        return (
            <div>
                <CircularProgress
                    className={classes.progress}
                    variant="determinate"
                    size={50}
                    value={this.state.completed}
                />
            </div>
        );
    }
}

export default withStyles(styles)(Loading);
