import React from 'react'
import i18n from 'i18next';

const languages=[
    {code:'en', name:'English'    },
    {code:'ar', name:'العربية'    },
    {code:'fr', name:'Français'    },
    ];
const changelang=(lng)=>{
    i18n.changeLanguage(lng);
    }    
function Languagebuttons() {
  return (
    <div>
        {languages.map((lang)=>(
            <button key={lang.code} onClick={()=>changelang(lang.code)} >
                {lang.name}
            </button>
        ))}
    </div>
  )
}

export default Languagebuttons