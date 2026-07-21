import type { ScientistProfile } from "./types";
import { isaacNewton } from "./isaac-newton";
import { albertEinstein } from "./albert-einstein";
import { thomasEdison } from "./thomas-edison";
import { nikolaTesla } from "./nikola-tesla";
import { marieCurie } from "./marie-curie";
import { galileoGalilei } from "./galileo-galilei";
import { charlesDarwin } from "./charles-darwin";
import { michaelFaraday } from "./michael-faraday";
import { louisPasteur } from "./louis-pasteur";
import { alexanderFleming } from "./alexander-fleming";
import { cvRaman } from "./cv-raman";
import { jagadishChandraBose } from "./jagadish-chandra-bose";
import { katherineJohnson } from "./katherine-johnson";
import { dorothyHodgkin } from "./dorothy-hodgkin";
import { homiBhabha } from "./homi-bhabha";
import { alanTuring } from "./alan-turing";
import { srinivasaRamanujan } from "./srinivasa-ramanujan";
import { adaLovelace } from "./ada-lovelace";
import { rosalindFranklin } from "./rosalind-franklin";
import { janeGoodall } from "./jane-goodall";
import { rachelCarson } from "./rachel-carson";
import { ibnAlHaytham } from "./ibn-al-haytham";
import { archimedes } from "./archimedes";
import { hypatia } from "./hypatia";
import { subrahmanyanChandrasekhar } from "./subrahmanyan-chandrasekhar";
import { barbaraMcclintock } from "./barbara-mcclintock";
import { liseMeitner } from "./lise-meitner";
import { chienShiungWu } from "./chien-shiung-wu";
import { henriettaLeavitt } from "./henrietta-leavitt";
import { ceciliaPayneGaposchkin } from "./cecilia-payne-gaposchkin";
import { maryAnning } from "./mary-anning";
import { graceHopper } from "./grace-hopper";
import { abdusSalam } from "./abdus-salam";
import { abdAlRahmanAlSufi } from "./abd-al-rahman-al-sufi";
import { johannesKepler } from "./johannes-kepler";
import { nicolausCopernicus } from "./nicolaus-copernicus";
import { jamesClerkMaxwell } from "./james-clerk-maxwell";
import { nielsBohr } from "./niels-bohr";
import { ernestRutherford } from "./ernest-rutherford";
import { erwinSchrodinger } from "./erwin-schrodinger";
import { maxPlanck } from "./max-planck";
import { antoineLavoisier } from "./antoine-lavoisier";
import { johnDalton } from "./john-dalton";
import { dmitriMendeleev } from "./dmitri-mendeleev";
import { pythagoras } from "./pythagoras";
import { euclid } from "./euclid";
import { leonhardEuler } from "./leonhard-euler";
import { alKhwarizmi } from "./al-khwarizmi";
import { carlFriedrichGauss } from "./carl-friedrich-gauss";
import { emmyNoether } from "./emmy-noether";

export * from "./types";

/**
 * Deep-dive profiles, keyed by scientist slug.
 *
 * Add a profile here to light up the extended sections on that scientist's
 * page. Scientists absent from this registry render exactly as before —
 * the deep-dive layer is entirely opt-in.
 */
const PROFILES: Record<string, ScientistProfile> = {
  [isaacNewton.slug]: isaacNewton,
  [albertEinstein.slug]: albertEinstein,
  [thomasEdison.slug]: thomasEdison,
  [nikolaTesla.slug]: nikolaTesla,
  [marieCurie.slug]: marieCurie,
  [galileoGalilei.slug]: galileoGalilei,
  [charlesDarwin.slug]: charlesDarwin,
  [michaelFaraday.slug]: michaelFaraday,
  [louisPasteur.slug]: louisPasteur,
  [alexanderFleming.slug]: alexanderFleming,
  [cvRaman.slug]: cvRaman,
  [jagadishChandraBose.slug]: jagadishChandraBose,
  [katherineJohnson.slug]: katherineJohnson,
  [dorothyHodgkin.slug]: dorothyHodgkin,
  [homiBhabha.slug]: homiBhabha,
  [alanTuring.slug]: alanTuring,
  [srinivasaRamanujan.slug]: srinivasaRamanujan,
  [adaLovelace.slug]: adaLovelace,
  [rosalindFranklin.slug]: rosalindFranklin,
  [janeGoodall.slug]: janeGoodall,
  [rachelCarson.slug]: rachelCarson,
  [ibnAlHaytham.slug]: ibnAlHaytham,
  [archimedes.slug]: archimedes,
  [hypatia.slug]: hypatia,
  [subrahmanyanChandrasekhar.slug]: subrahmanyanChandrasekhar,
  [barbaraMcclintock.slug]: barbaraMcclintock,
  [liseMeitner.slug]: liseMeitner,
  [chienShiungWu.slug]: chienShiungWu,
  [henriettaLeavitt.slug]: henriettaLeavitt,
  [ceciliaPayneGaposchkin.slug]: ceciliaPayneGaposchkin,
  [maryAnning.slug]: maryAnning,
  [graceHopper.slug]: graceHopper,
  [abdusSalam.slug]: abdusSalam,
  [abdAlRahmanAlSufi.slug]: abdAlRahmanAlSufi,
  [johannesKepler.slug]: johannesKepler,
  [nicolausCopernicus.slug]: nicolausCopernicus,
  [jamesClerkMaxwell.slug]: jamesClerkMaxwell,
  [nielsBohr.slug]: nielsBohr,
  [ernestRutherford.slug]: ernestRutherford,
  [erwinSchrodinger.slug]: erwinSchrodinger,
  [maxPlanck.slug]: maxPlanck,
  [antoineLavoisier.slug]: antoineLavoisier,
  [johnDalton.slug]: johnDalton,
  [dmitriMendeleev.slug]: dmitriMendeleev,
  [pythagoras.slug]: pythagoras,
  [euclid.slug]: euclid,
  [leonhardEuler.slug]: leonhardEuler,
  [alKhwarizmi.slug]: alKhwarizmi,
  [carlFriedrichGauss.slug]: carlFriedrichGauss,
  [emmyNoether.slug]: emmyNoether,
};

export function getScientistProfile(slug: string): ScientistProfile | undefined {
  return PROFILES[slug];
}

/** Slugs that currently have a deep-dive profile. */
export function profiledSlugs(): string[] {
  return Object.keys(PROFILES);
}
