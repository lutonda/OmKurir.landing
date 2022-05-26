import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';

import Chinese from "../lang/cn.json";
import Indonesian from "../lang/id.json";
import English from "../lang/en.json";

export const Context = React.createContext<any>({});

/*
const local = navigator.language??'id';


let lang: any = {
  en: English,
  cn: Chinese,
  id: Indonesian,
}[local ?? "id"];

*/
let local = navigator.language;

let lang:any;
if (local === 'en') {
    lang = English;
}else {
    if (local === 'cn') {
        lang = Chinese;
    } else {
        lang = Indonesian;
        local = 'id';
    }
}

const Wrapper = (props: any) => {
    const [locale, setLocale] = useState(local);

    const [messages, setMessages] = useState(lang);

    function selectLanguage(lang:any) {
        
        setLocale(lang.code);
        if (lang.code === 'en') {
            setMessages(English);
        } else {
            if (lang.code === 'cn'){
                setMessages(Chinese);
            } else {
                setMessages(Indonesian);
            }
        }
    }

    return (
        <Context.Provider value = {{locale, selectLanguage}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>

    );
}


export default Wrapper;
