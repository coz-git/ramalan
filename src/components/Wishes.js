import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  fitri,
  lulu,
  desdika,
  rafiq,
  silvie,
  mds,
} from '../assets/images/index'

const useStyles = makeStyles((theme) => ({
    storyTitle : {
        fontFamily : 'Cookie,cursive!important',
        fontSize: '60px',
        color: '#f14e95',
    },
	storySubtitle : {
		color : '#f368a4',
	}
}));

const listWish = [
	{
		image : lulu,
		name : 'Nurul Fadillah Harahap',
		position : 'Saudara Lala',
		quote : '"happy wedding ka lala, semoga menjadi keluarga yang samawa, di lancarkan rezkynya dan menjadi keluarga terbahagia, mendapat kan momongan yang gemoy-gemoy dan embul2 kayak kalian, kalo anaknya perempuan panutannya harus aku si mermaid manjah lita ulalala.. Intinya semoga rumah tangga kalian selalu harmonis, pasang surut pasti ada tapi harus tetap kokoh dan jangan lupa pake nodrop anti bocor😚😚"'
	},
	{
		image : fitri,
		name : 'Fitrianni Romadhona',
		position : 'Sepupu Rama',
		quote : `"Selamat yaaa ram.. 
		Semoga lancar sampai hari H nya tiba, aamiin 🤲🏻🥺 
		
		Alhamdulillah, sekarang Rama dapat keluarga yang super saling melengkapi satu sama lain, teteh haru liatnya 🥺"`
	},
	{
		image : rafiq,
		name : 'Putri Rapiq',
		position : 'Sahabat Lala',
		quote : '"Happy wedding kak Lala, semoga menjadi keluarga yg samawa ❤️❤️ makin sukses kedepannya, dan menjadi keluarga montok2 😚 tetap menjaga satu sama lain karna hubungan di bangun berdua kalo sndiri isolasi mandiri namanya."'
	},
	{
		image : mds,
		name : 'Muhammad Dwi Saputra',
		position : 'Sahabat Rama',
		quote : '"selamat atas pernikahannya Kosasih Wahid Pramana dan Istri, semoga menjadi langkah awal untuk perjalanan hidup yang bahagia dan harmonis dalam hidup bersama. semoga menjadi keluarga yang sakinah mawadah warohmah"'
	},
	{
		image : silvie,
		name : 'Silvie angelina',
		position : 'Sahabat Lala',
		quote : '"Congratsss laaaa🥰 so excited for you😍😍 semoga samawa yaaa😘"'
	},
	{
		image : desdika,
		name : 'Desdika khadijah',
		position : 'Sahabat Lala',
		quote : '"semoga lancar² smpe hari H yaa beb, mnjdi klrga SaMaWa di karuniai anak² yg sholeh & sholeha, Aamiin"'
	},
]

const Wishes = () => {
	const classes = useStyles();
	return (
		<div id="fh5co-testimonial">
			<div className="container">
				<div className="row">
					<div className="row animate-box">
						<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
							<h2 className={classes.storyTitle}>Friends Wishes</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 animate-box">
							<div className="wrap-testimony">
								<div className="owl-carousel-fullwidth">
									{listWish.map((item, index) => (
										<div key={index} className="item">
											<div className="testimony-slide active text-center">
												<figure>
													<img src={item.image} alt="user" />
												</figure>
												<span>{item.name}</span>
												<span>{item.position}</span>
												<blockquote>
													<p style={{fontSize : '16px'}}>{item.quote}</p>
												</blockquote>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Wishes