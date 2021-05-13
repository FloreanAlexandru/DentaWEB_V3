import "./Services.css"
import { useTranslation } from 'react-i18next';

function Servicii(){

    const{t, i18n} = useTranslation();

    return(
        <div>
            <div className="content-section-s">
            <h1 className="title-s"> {t('Servicii și Tarife.1')} </h1>
            </div>

        <table className="content-table">
            <thead>
                <tr>
                    <th> {t('no.1')} </th>
                    <th> {t('servc.1')}</th>
                    <th> {t('pret.1')}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> 1. </td>
                    <td> {t('no1.1')}</td>
                    <td> {t('pr1.1')}</td>
                </tr>
                <tr>
                    <td> 2. </td>
                    <td> {t('no2.1')}</td>
                    <td> {t('pr2.1')}</td>
                </tr>
                <tr>
                    <td> 3. </td>
                    <td> {t('no3.1')}</td>
                    <td> {t('pr3.1')}</td>
                </tr>
                <tr>
                    <td> 4. </td>
                    <td> {t('no4.1')}</td>
                    <td> {t('pr4.1')}</td>
                </tr>
                <tr>
                    <td> 5. </td>
                    <td> {t('no5.1')}</td>
                    <td> {t('pr5.1')}</td>
                </tr>
                <tr>
                    <td> 6. </td>
                    <td> {t('no6.1')}</td>
                    <td> {t('pr6.1')}</td>
                </tr>
                <tr>
                    <td> 7. </td>
                    <td> {t('no7.1')}</td>
                    <td> {t('pr7.1')}</td>
                </tr>
                <tr>
                    <td> 8. </td>
                    <td> {t('no8.1')}</td>
                    <td> {t('pr8.1')}</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}

export default Servicii;