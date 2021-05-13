import image from "./images/about_us.jpg";
import './About.css'
import { useTranslation } from 'react-i18next';

function DespreNoi(){

	const{t, i18n} = useTranslation();

    return(
        <div className="content-section1">
			<img className="about-us-image" src={image} alt=""/>
			<div >
				<h1 className="section-header"> {t('titluDN.1')} </h1>
			    <p className="about-us-text">{t('pDN1.1')}<br />
				{t('pDN2.1')}<br /><br />
				{t('pDN3.1')}<br /><br />
				{t('pDN4.1')}<br /><br />
				{t('pDN5.1')}<br /><br />
				{t('pDN6.1')}<br /><br />
				{t('pDN7.1')}<br /><br />
				{t('pDN8.1')}<br /><br />
				{t('pDN9.1')}<br /><br />
				{t('pDN10.1')}<br /><br />
				{t('pDN11.1')}<br /><br />
			
                </p>
            </div>
		</div>

    );
}

export default DespreNoi;