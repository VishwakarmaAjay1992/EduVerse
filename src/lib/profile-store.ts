"use client";
export type LearnerProfile={id:string;name:string;email?:string;role:"student"|"teacher";createdAt:string};
const KEY="eduverse:profile:v1";
export function getProfile():LearnerProfile|null{if(typeof window==="undefined")return null;try{return JSON.parse(localStorage.getItem(KEY)??"null")}catch{return null}}
export function saveProfile(p:LearnerProfile){localStorage.setItem(KEY,JSON.stringify(p));window.dispatchEvent(new Event("eduverse-profile"));}
export function clearProfile(){localStorage.removeItem(KEY);}
