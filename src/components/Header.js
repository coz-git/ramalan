import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '30px',
    },
    container: {
        height: '100vh'
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div>
            <header  className="fh5co-cover" role="banner" data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <div className="display-t">
                                <div className="display-tc animate-box" data-animate-effect="fadeIn">
                                    <h1>Lala &amp; Rama</h1>
                                    <h2>We Are Getting Married</h2>
                                    <div className="simply-countdown simply-countdown-one"></div>
                                    <p><a href="#" className="btn btn-default btn-sm">Save the date</a></p>
                                    {/* <div >
                                        <Button variant="contained">Default</Button>
                                        <Button variant="contained" color="primary">
                                            Primary
                                        </Button>
                                        <Button variant="contained" color="secondary">
                                            Secondary
                                        </Button>
                                        <Button variant="contained" disabled>
                                            Disabled
                                        </Button>
                                        <Button variant="contained" color="primary" href="#contained-buttons">
                                            Link
                                        </Button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header