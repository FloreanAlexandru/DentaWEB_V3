import './News.css'
import React, {Component} from 'react'
import { Translation } from 'react-i18next';

import xmlText from './xml/News.xml';
import XMLParser from 'react-xml-parser';

class Noutăți extends React.Component{
    constructor(props){
        super(props);
        this.state={
            xmlData:''
        }
    }
    componentDidMount=()=>{
        let xml_Img;
       
        fetch(xmlText)
        .then((response) =>response.text())
        .then((xmlText) => {
            console.log("WorkingTillHere",xmlText)
            xml_Img = new XMLParser().parseFromString(xmlText); 
            console.log(xml_Img);
            this.setState({
                xmlData : xml_Img.children
            });

        }) .catch((error) => {
            console.log("ParserEx",error);
        });
    }

    render(){
    return(
    <div>
        <Translation>
            {
            (t,{i18n}) => <div className= "content-section2">
             <h1 className="title1">{t('Noutăți.1')} </h1>
             </div>
            }
        </Translation>

         {this.state.xmlData && this.state.xmlData.map((item)=>
        
        <div className="new1">
        <Translation>{
            (t,{i18n}) => <h3>{t(item.children[0].value)}</h3>
            }
        </Translation>

        <Translation>{
               (t,{i18n}) =>     
                    <p>
                        {t(item.children[1].value)}
                    </p>
        }
        </Translation>
            </div>)
            } 

        </div>
    );
    }
}

export default Noutăți;