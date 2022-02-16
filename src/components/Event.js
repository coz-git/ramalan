import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
    },
    eventDate : {
		display:'flex',
		// justifyContent:'center',
		alignItems :'center',
		margin : '10px 0px',
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
	
}));

const Event = () => {
	const classes = useStyles();

	return (
		<>
			<div id="fh5co-event" className="fh5co-bg" >
				<div className="overlay"></div>
				<div className="container">
				<div className="row">
					<div style={{paddingTop :'30px', marginBottom : '40px'}} className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
					<span style={{fontSize : '20px', fontWeight : 'bold', color :'#fff'}}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
					<h2>Acara Akad Nikah dan Resepsi</h2>
					<p style={{ color :'#fff'}}>Insya Allah akan diselenggarakan pada</p>
					</div>
				</div>
				<div className="row">
					<div className="display-t">
					<div className="display-tc">
						<div className="col-md-10 col-md-offset-1">
							<div className="col-md-2 col-sm-2"></div>
							<div className="col-md-4 col-sm-4 text-center">
								<div className="event-wrap animate-box">
									<h3>Akad Nikah</h3>
									<div className={classes.eventDate}>
										<i style={{marginRight : '10px'}} className="icon-clock"></i>
										<p style={{margin : 'auto 0'}}>08:00 - 10:00 WIB</p>
									</div>
									<div className={classes.eventDate}>
										<i style={{marginRight : '10px'}} className="icon-calendar"></i>
										<p style={{margin : 'auto 0'}}>Minggu, 20 Feb 2022</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-4 text-center">
								<div className="event-wrap animate-box">
								<h3>Resepsi Nikah</h3>
									<div className={classes.eventDate}>
										<i style={{marginRight : '10px'}} className="icon-clock"></i>
										<p style={{margin : 'auto 0'}}>10:00 - 18:00 WIB</p>
									</div>
									<div className={classes.eventDate}>
										<i style={{marginRight : '10px'}} className="icon-calendar"></i>
										<p style={{margin : 'auto 0'}}>Minggu, 20 Feb 2022</p>
									</div>
								</div>
							</div>
							<div style={{marginTop : '20px'}} className="col-md-12 text-center">
								<a href="https://goo.gl/maps/DQxbCHLpHSXGDJnC7" target="_blank">
									<Button variant="contained" className={classes.buttonDetail}>
										Click Here for Location
									</Button>
								</a>
							</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
		</>
	)
}

export default Event