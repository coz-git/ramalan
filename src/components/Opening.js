import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import lala from '../assets/images/opening/lala crop.jpg'
import me from '../assets/images/opening/me crop.jpg'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
    },
    textSalam : {
        fontFamily : 'Cookie,cursive!important',
    },
    textDate : {
		color : '#535353',
		fontWeight : 'bold'
	},
	
}));

const Opening = () => {
	const classes = useStyles();

	return (
		<div id="opening" className={classes.container}>
			<div className="row">
				<div style={{ marginBottom : '40px' }} className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
					<h2 className={classes.textSalam}>Assalamualaikum Wr. Wb</h2>
					<h3 className={classes.textDate}>Minggu, 20 Februari 2022</h3>
					<p>Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan keberkahan.</p>
				</div>
			</div>
			<div className="couple-wrap animate-box">
				<div className="couple-half">
					<div className="groom">
						<img src={me} alt="groom" className="img-responsive" />
					</div>
					<div className="desc-groom">
						<h3>Kosasih Wahid Pramana</h3>
						<p style={{ fontSize : '14px' }}>Putra Bapak Hendra Riyanto & Ibu Siti Rodiah</p>
					</div>
				</div>
				<p className="heart text-center"><i className="icon-heart2"></i></p>
				<div className="couple-half">
					<div className="bride">
						<img src={lala} alt="groom" className="img-responsive" />
					</div>
					<div className="desc-bride">
						<h3>Nirmala Aulia Harahap</h3>
						<p style={{ fontSize : '14px' }}>Putri Bapak Pahruddin Harahap & Ibu Efridanni Siregar</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Opening