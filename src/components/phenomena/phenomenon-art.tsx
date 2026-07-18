"use client";
import type { PhenomenonCategory } from "@/data/phenomena";

const palettes: Record<PhenomenonCategory,[string,string,string]> = {
  "Light and Optics":["#7c3aed","#06b6d4","#f59e0b"],
  "Atmosphere and Weather":["#2563eb","#38bdf8","#e2e8f0"],
  "Water and Oceans":["#0369a1","#06b6d4","#67e8f9"],
  Sound:["#9333ea","#ec4899","#f9a8d4"],
  "Heat and Matter":["#dc2626","#f59e0b","#fde68a"],
  Electricity:["#4f46e5","#facc15","#ffffff"],
  "Space and Earth":["#020617","#1d4ed8","#22c55e"],
};
export function PhenomenonArt({category,index,title,className=""}:{category:PhenomenonCategory;index:number;title:string;className?:string}){
 const [a,b,c]=palettes[category]; const id=`p-${index}`;
 return <svg role="img" aria-label={`Original scientific illustration for ${title}`} viewBox="0 0 800 480" className={className}>
  <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop stopColor={a}/><stop offset=".55" stopColor={b}/><stop offset="1" stopColor={c}/></linearGradient><filter id={`${id}-blur`}><feGaussianBlur stdDeviation="22"/></filter></defs>
  <rect width="800" height="480" fill={`url(#${id})`}/>
  <circle cx={120+(index*37)%560} cy={100+(index*29)%240} r="78" fill="white" opacity=".18" filter={`url(#${id}-blur)`}/>
  {Array.from({length:7}).map((_,i)=><path key={i} d={`M -40 ${70+i*52} Q ${180+(index%4)*50} ${10+i*60}, 840 ${100+i*42}`} fill="none" stroke="white" strokeWidth={i%2?5:2} opacity={.12+i*.035}/>) }
  <g fill="none" stroke="white" opacity=".78">
   <circle cx="400" cy="240" r={70+(index%5)*12} strokeWidth="3"/>
   <circle cx="400" cy="240" r={130+(index%3)*18} strokeWidth="1.5" strokeDasharray="8 13"/>
   <path d="M180 300 C300 130 500 130 620 300" strokeWidth="5"/>
  </g>
  <text x="42" y="430" fill="white" fontSize="22" fontWeight="700" opacity=".92">{String(index).padStart(2,"0")} · {category}</text>
 </svg>
}
