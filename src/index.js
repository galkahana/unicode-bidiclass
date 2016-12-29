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
const pdf = require('unicode-9.0.0/Bidi_Class/Pop_Directional_Format/regex');
const pdi = require('unicode-9.0.0/Bidi_Class/Pop_Directional_Isolate/regex');
const r = require('unicode-9.0.0/Bidi_Class/Right_To_Left/regex');
const rle = require('unicode-9.0.0/Bidi_Class/Right_To_Left_Embedding/regex');
const rli = require('unicode-9.0.0/Bidi_Class/Right_To_Left_Isolate/regex');
const rlo = require('unicode-9.0.0/Bidi_Class/Right_To_Left_Override/regex');
const s = require('unicode-9.0.0/Bidi_Class/Segment_Separator/regex');
const ws = require('unicode-9.0.0/Bidi_Class/White_Space/regex');
// end regex imports

// Use an LRU cache with 2^16 = 65536 items
// to store the lookups of char -> bidi_class
const LRUMap = require('lru_map').LRUMap;
const CACHE_SIZE = 1 << 16;
const cache = new LRUMap(CACHE_SIZE);

const regexes = {
  'AL': al,
  'AN': an,
  'BN': bn,
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
  'PDF': pdf,
  'PDI': pdi,
  'R': r,
  'RLE': rle,
  'RLI': rli,
  'RLO': rlo,
  'S': s,
  'WS': ws
};

function lookup(codepoint) {
  let name;
  const cacheHit = cache.get(codepoint);
  if (cacheHit !== undefined) { return cacheHit }

  for (name in regexes) {
    if (regexes[name].test(codepoint) === true) {
      cache.set(codepoint, name);
      return name;
    }
  }
  return undefined;
}

export default lookup;
