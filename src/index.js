// begin regex imports
var al = require('@unicode/unicode-9.0.0/Bidi_Class/Arabic_Letter/regex');
var an = require('@unicode/unicode-9.0.0/Bidi_Class/Arabic_Number/regex');
var bn = require('@unicode/unicode-9.0.0/Bidi_Class/Boundary_Neutral/regex');
var cs = require('@unicode/unicode-9.0.0/Bidi_Class/Common_Separator/regex');
var en = require('@unicode/unicode-9.0.0/Bidi_Class/European_Number/regex');
var es = require('@unicode/unicode-9.0.0/Bidi_Class/European_Separator/regex');
var et = require('@unicode/unicode-9.0.0/Bidi_Class/European_Terminator/regex');
var fsi = require('@unicode/unicode-9.0.0/Bidi_Class/First_Strong_Isolate/regex');
var l = require('@unicode/unicode-9.0.0/Bidi_Class/Left_To_Right/regex');
var lre = require('@unicode/unicode-9.0.0/Bidi_Class/Left_To_Right_Embedding/regex');
var lri = require('@unicode/unicode-9.0.0/Bidi_Class/Left_To_Right_Isolate/regex');
var lro = require('@unicode/unicode-9.0.0/Bidi_Class/Left_To_Right_Override/regex');
var nsm = require('@unicode/unicode-9.0.0/Bidi_Class/Nonspacing_Mark/regex');
var on = require('@unicode/unicode-9.0.0/Bidi_Class/Other_Neutral/regex');
var b = require('@unicode/unicode-9.0.0/Bidi_Class/Paragraph_Separator/regex');
var pdf = require('@unicode/unicode-9.0.0/Bidi_Class/Pop_Directional_Format/regex');
var pdi = require('@unicode/unicode-9.0.0/Bidi_Class/Pop_Directional_Isolate/regex');
var r = require('@unicode/unicode-9.0.0/Bidi_Class/Right_To_Left/regex');
var rle = require('@unicode/unicode-9.0.0/Bidi_Class/Right_To_Left_Embedding/regex');
var rli = require('@unicode/unicode-9.0.0/Bidi_Class/Right_To_Left_Isolate/regex');
var rlo = require('@unicode/unicode-9.0.0/Bidi_Class/Right_To_Left_Override/regex');
var s = require('@unicode/unicode-9.0.0/Bidi_Class/Segment_Separator/regex');
var ws = require('@unicode/unicode-9.0.0/Bidi_Class/White_Space/regex');
// end regex imports

var punycode = require('punycode');

var regexes = {
  'AL': al,
  'AN': an,
  'BN': bn,
  'CS': cs,
  'EN': en,
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
  const encoding = punycode.ucs2.encode([codepoint]);
  var name;
  for (name in regexes) {
    if (regexes[name].test(encoding) === true) {
      return name;
    }
  }
  return undefined;
}

module.exports = lookup;
