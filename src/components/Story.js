import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  awal,
  dewasa,
  kasih,
  rindu,
  khitbah,
} from '../assets/images/index'

const useStyles = makeStyles((theme) => ({
    storyTitle : {
        fontFamily : 'Cookie,cursive!important',
        fontSize: '60px',
        color: '#f14e95',
    },
	storySubtitle : {
		color : '#f368a4',
	},
	storyText : {
		fontSize : '14px',
	}
}));

const Story = () => {
	const classes = useStyles();
	return (
		<div id="fh5co-couple-story">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
						<h2 className={classes.storyTitle}>Our Magic Story</h2>
						<h4 className={classes.storySubtitle}>Long story until we decided together forever</h4>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 col-md-offset-0">
						<ul className="timeline animate-box">
							<li className="animate-box">
								<div className="timeline-badge" style={{ backgroundImage : `url(${awal})` }}></div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h3 className="timeline-title">Awal Pertemuan</h3>
										<span className="date">Juli, 2016</span>
									</div>
									<div className="timeline-body">
										<p className={classes.storyText}>kata siapa jarak jadi penghalang dua insan untuk saling kenal. Apalagi ini udah zaman modern. Ikan dilaut kangkung dikebun aja bisa ketemu dalam satu piring ✌️. Begitu juga Aku dan dia, dimana takdir Tuhan yang jadi acuan pertemuan kami. Dari satu platform app streaming yang cukup familiar. Bogor - Medan dekat sih kalau naik pesawat hehe 🤪. Yang jauh itu mimpi untuk bisa bertemu 😊</p>
									</div>
								</div>
							</li>
							<li className="timeline-inverted animate-box">
								<div className="timeline-badge" style={{ backgroundImage : `url(${dewasa})` }}></div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h3 className="timeline-title">Masa Pendewasaan</h3>
										<span className="date">Desember, 2016</span>
									</div>
									<div className="timeline-body">
										<p className={classes.storyText}>tidak ada hubungan yang mulus, begitu juga dengan perteman kami. Remaja 17 tahun LDR pula. Siapa yang tahan yakan. Pertemanan 6 bulan kami pun tinggal angan-angan dimana lala memblokir semua komunikasi untuk rama. dan membuat kami hilang komunikasi selama Kurang lebih lima tahun</p>
									</div>
								</div>
							</li>
							<li className="animate-box">
								<div className="timeline-badge" style={{ backgroundImage : `url(${kasih})` }}></div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h3 className="timeline-title">Merajut Kasih</h3>
										<span className="date">Januari, 2020</span>
									</div>
									<div className="timeline-body">
										<p className={classes.storyText}>2020 jadi Tahun penuh dengan hal yg tidak terduga, 5 tahun tak bertegur sapa lewat sosial media. Siapa sangka Rama memberanikan diri chat lala duluan (setelah akses udah di unblockir 🤣) tapi hanya sebatas sapa. Lala yang masih penasaran gak hanya tinggal diam. Orang lain pun jadi tameng agar kami bisa chat panjang lebar. Dan akhirnya bertukar no Wa kembali cieee 😍. Dan tgl 20 Februari 2020 jadi saksi bisu pertama kalinya lala maksa rama untuk kasih kejelasan hubungan 🤣 (lala anaknya gak sabaran emang✌️) hehe</p>
									</div>
								</div>
							</li>
							<li className="timeline-inverted animate-box">
								<div className="timeline-badge" style={{ backgroundImage : `url(${rindu})` }}></div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h3 className="timeline-title">Melepas Rindu</h3>
										<span className="date">Juni, 2021</span>
									</div>
									<div className="timeline-body">
										<p className={classes.storyText}>setelah 1 tahun lebih merajut cinta dengan jalan LDR, Rama punya nyali juga terbang ke medan. ( Tanpa sepengetahuan orang tuanya) nakal banget kan dia.  Katanya mau ketemu lala, sweetnyaa 😍. Tapi gak ! Tetap aja dia nakal karena gak izin sama orang tuanya. Kurang lebih 4 bulan rama di Medan. Lala dengan sepenuh hati menemani dan mengajak Rama kesana kemarin contohnya minum bandrek di penatapan 🤣</p>
									</div>
								</div>
							</li>
							<li className="animate-box">
								<div className="timeline-badge" style={{ backgroundImage : `url(${khitbah})` }}></div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h3 className="timeline-title">Khitbah yang khidmat</h3>
										<span className="date">Oktober, 2021</span>
									</div>
									<div className="timeline-body">
										<p className={classes.storyText}>Rencana demi rencana telah disusun, kata siapa mulus. Paud (papa lala) dengan keras menolak rencana pernikahan kami saat itu. Mengingat kami barus saja bertemu. Tapi dengan kelembutan hati serta tutur kata Rama dan keberanianya berbicara langsung didepan Paud Alhamdulillah tanggal 10 Oktober 2021 Lala resmi dilamar oleh Rama. Dan memantapkan hati untuk mengadakan pertemuan keluarga besar ditanggal 13 feb 2022 untuk menyusun acara pernikahan yang inshaAllah akan dilangsungkan pada 20 feb 2022 ini 🥰</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Story