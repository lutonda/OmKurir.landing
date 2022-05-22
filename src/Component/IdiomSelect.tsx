import React from 'react';

const idioms =[
 {flag: "/assets/images/flags/cn.svg", name:'中國'}
,{flag: "/assets/images/flags/gb.svg", name:'English'}
,{flag: "/assets/images/flags/id.svg", name:'Indonesia'}]

export default function IdiomSelect() {
  
  return (
    <div className="dropdown">
      <span
        className=" dropdown-toggle"
        
        data-toggle="dropdown"
      >
        <img src="/assets/images/flags/gb.svg"  style={{width:30}} />
        <span className="caret"></span>
      </span>
      <ul className="dropdown-menu">
        {idioms.map((idiom) => (
          <li>
            <a href="#" style={{padding:5}}>
              <img src={idiom.flag} style={{width:30, boxShadow:"0 0 2px"}}/> {idiom.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
