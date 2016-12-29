// begin regex imports
const al = require('unicode-9.0.0/Bidi_Class/Arabic_Letter/regex');
const an = require('unicode-9.0.0/Bidi_Class/Arabic_Number/regex');
const bn = require('unicode-9.0.0/Bidi_Class/Boundary_Neutral/regex');
const cs = require('unicode-9.0.0/Bidi_Class/Common_Separator/regex');
const es = require('unicode-9.0.0/Bidi_Class/European_Separator/regex');
const et = require('unicode-9.0.0/Bidi_Class/European_Terminator/regex');
const fsi = require('unicode-9.0.0/Bidi_Class/First_Strong_Isolate/regex');
const l = require('unicode-9.0.0/Bidi_Class/Left_To_Right/regex');
const lre = require('unicode-9.0.0/Bidi_Class/Left_To_Right_Embedding/regex');
const lri = require('unicode-9.0.0/Bidi_Class/Left_To_Right_Isolate/regex');
const lro = require('unicode-9.0.0/Bidi_Class/Left_To_Right_Override/regex');
const nsm = require('unicode-9.0.0/Bidi_Class/Nonspacing_Mark/regex');
const on = require('unicode-9.0.0/Bidi_Class/Other_Neutral/regex');
const b = require('unicode-9.0.0/Bidi_Class/Paragraph_Separator/regex');
const pdi = require('unicode-9.0.0/Bidi_Class/Pop_Directional_Isolate/regex');
const r = require('unicode-9.0.0/Bidi_Class/Right_To_Left/regex');
const rle = require('unicode-9.0.0/Bidi_Class/Right_To_Left_Embedding/regex');
const rli = require('unicode-9.0.0/Bidi_Class/Right_To_Left_Isolate/regex');
const rlo = require('unicode-9.0.0/Bidi_Class/Right_To_Left_Override/regex');
const s = require('unicode-9.0.0/Bidi_Class/Segment_Separator/regex');
const ws = require('unicode-9.0.0/Bidi_Class/White_Space/regex');
// end regex imports

const regexes = {
  'AL': al,
  'AN': an,
  'CS': cs,
  'ES': es,
  'ET': et,
  'FSI': fsi,
  'L': l,
  'LRE': lre,
  'LRI': lri,
  'LRO': lro,
  'NSM': nsm,
  'ON': on,
  'B': b,
  'PDI': pdi,
  'R': r,
  'RLE': rle,
  'RLI': rli,
  'RLO': lro
};

function lookup(codepoint) {
  let name;
  for (name in regexes) {
    if (regexes[name].test(codepoint) === true) {
      return name;
    }
  }
  return undefined;
}

console.log(lookup('\u0645'));
console.log(lookup('a'));
