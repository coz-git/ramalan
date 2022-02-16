import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import kita from '../assets/images/header/DSC00363.JPG'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        backgroundColor : '#40e0d0',
        backgroundImage : `url(${kita})`,
        backgroundPosition : 'center',
        backgroundSize : 'cover',
        display : 'flex',
        alignItems :'center',
        justifyContent : 'center',
        textAlign : 'center',
        
    },
    textColor : {
        color : '#75c6ec',
        textShadow : '0 0 7px #000',
    },
    textName : {
        fontFamily : 'Sacramento, Arial, serif',
        fontSize : '100px',
        lineHeight : '1.5',
        margin : '0px',
        padding : '0px',
        '@media (max-width: 500px)' : {
            fontSize: '56px',
        }
    },
    textTitle :{
        fontSize : '30px',
        fontWeight : 'bold',
    },
    buttonDetail : {
        padding : '10px 40px',
        backgroundColor : '#F5A9CB',
        fontWeight : 'bold',
        animation : 'pulse 2s ease infinite',
        borderRadius : '30px',
        transition: 'transform ease 400ms',
        '&:hover': {
            backgroundColor: "#977FD7",
            color : '#fff',
            transform: 'translate(0, -10px)',
        },
    },
    clickButton : {
        cursor : 'pointer'
    }
}));

const Head = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div>
                <h1 className={classes.textName + ' ' + classes.textColor}>Lala &amp; Rama</h1>
                <h2 className={classes.textTitle + ' ' + classes.textColor}>We Are Getting Married</h2>
                <h4 style={{ paddingTop : '20px', fontWeight : 'bold'}} className={classes.textColor}>Dear Friends,</h4>
                <hr style={{ borderTop :'2px solid #75c6ec'}}/>
                <Link activeClass="active" to="opening" spy={true} smooth={true}>
                <div className={classes.clickButton}>
                    <div>
                        <ExpandMoreIcon style={{ fontSize: 40, fontStyle : '#f1f1f1' }} />
                    </div>
                    <Button variant="contained" className={classes.buttonDetail}>
                        Click Here for Detail
                    </Button>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Head