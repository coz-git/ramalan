import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import footerKita from '../assets/images/footer/footer.jpg'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor : '#40e0d0',
		backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${footerKita})`,
        backgroundPosition : 'center',
        backgroundSize : 'cover',
		padding :'30px 0px',
        display : 'flex',
        alignItems :'center',
        justifyContent : 'center',
        textAlign : 'center'
    },
	textColor : {
        color : '#75c6ec',
        textShadow : '0 0 3px #000',
    },
	footerTitle : {
        fontFamily : 'Cookie,cursive!important',
        fontSize: '60px',
        color: '#f14e95',
    },
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className="container" style={{width:'80%'}}>
				<h3 className={classes.footerTitle}>Thank You</h3>
				<p className={classes.textColor}>Atas segala do'a dan restu saudara/i, <br/> kami ucapkan terima kasih. <br/> Wassalamualaikum warahmatullahi wabarakatuh.</p>
			</div>
		</div>
	)
}

export default Footer