import React, { useContext, useState } from "react";

import { FormattedMessage, FormattedDate } from "react-intl";
import { Context } from "../Component/Wrapper";

const idioms = [
  { flag: "/assets/images/flags/id.svg", name: "Indonesia", code: "id" },
  { flag: "/assets/images/flags/cn.svg", name: "中國", code: "cn" },
  { flag: "/assets/images/flags/en.svg", name: "English", code: "en" },
];

export default function IdiomSelect() {
  const [language, setLanguage] = useState(idioms[0]);
  const context = useContext(Context);
  return (
    <div className="dropdown">
      <span className=" dropdown-toggle" data-toggle="dropdown">
        <img src={"/assets/images/flags/"+language.code+".svg"} style={{ width: 30 }} />
        <span className="caret"></span>
      </span>
      <ul className="dropdown-menu">
        {idioms.map((lang) => (
          <li>
            <a
              href="#"
              onClick={(_) =>{ context.selectLanguage(lang);setLanguage(lang)}}
              style={{ padding: 5 }}
            >
              <img
                src={lang.flag}
                style={{ width: 30, boxShadow: "0 0 2px" }}
              />{" "}
              {lang.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
