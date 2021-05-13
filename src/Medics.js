import "./Medici.css"
import d1 from "./images/dentist1.jpg"
import d2 from "./images/dentist2.jpg"
import d3 from "./images/dentist3.jpg"
import d4 from "./images/dentist4.jpg"

import { useTranslation } from 'react-i18next';

function Medici(){

	const{t, i18n} = useTranslation();

    return(
    <div>
        <div className="content-section-m">
			<h1 className="title-m"> {t('titluM.1')} </h1>
		</div>

		<div className="profile-cards">
		<div className="profile-card">
			<div className="img-container">
				<img src={d1} alt=""/>
				<div className="doctor">
					<h2>Dr. Mircea Radu</h2>
				</div>
			</div>
			<hr/>
			<div className="main-container">
				<h4 className="specialisation"> {t('stM.1')}: </h4>
				<ul className="list">
					<li>{t('sp1.1')} </li>
					<li>{t('sp2.1')} </li>
					<li>{t('sp3.1')} </li>
				</ul>
			</div>
		</div>

		<div className="profile-card">
			<div className="img-container">
				<img src={d2} alt=""/>
				<div className="doctor">
					<h2>Dr. Constantin Ciuce</h2>
				</div>
			</div>
			<hr/>
			<div className="main-container">
				<h4 className="specialisation"> {t('stM.1')}: </h4>
				<ul className="list">
					<li>{t('sp1.1')} </li>
					<li>{t('sp2.1')} </li>
					<li>{t('sp3.1')} </li>
					<li>{t('sp4.1')}</li>
				</ul>
			</div>
		</div>

		<div className="profile-card">
			<div className="img-container">
				<img src={d3} alt=""/>
				<div className="doctor">
					<h2>Dr. Cristina Zaciu</h2>
				</div>
			</div>
			<hr/>
			<div className="main-container">
				<h4 className="specialisation"> {t('stM.1')}: </h4>
				<ul className="list">
					<li>{t('sp7.1')} </li>
					<li>{t('sp5.1')} </li>
					<li>{t('sp3.1')}</li>
					<li>{t('sp6.1')} </li>
				</ul>
			</div>
		</div>

		<div className="profile-card">
			<div className="img-container">
				<img src={d4} alt=""/>
				<div className="doctor">
					<h2>Dr. Georgiana Ilici</h2>
				</div>
			</div>
			<hr/>
			<div className="main-container">
				<h4 className="specialisation"> {t('stM.1')}: </h4>
				<ul className="list">
					<li>{t('sp8.1')} </li>
					<li>{t('sp6.1')} </li>
					<li>{t('sp3.1')} </li>
				</ul>
			</div>
		</div>
	</div>
    </div>
    );
}

export default Medici;