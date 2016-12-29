import lookup from '../src/index';

describe('Looking up Unicode Bidi_Class for codepoint', () => {

  it('should return "AL" for "U+0627 ARABIC LETTER ALEF"', () => {
    expect(lookup('\u0627')).to.equal('AL');
  });

  it('should return "AN" for "U+0661 ARABIC-INDIC DIGIT ONE"', () => {
    expect(lookup('\u0661')).to.equal('AN');
  });

  it('should return "BN" for "U+0000 NULL"', () => {
    expect(lookup('\u0000')).to.equal('BN');
  });

  it('should return "CS" for "U+060C ARABIC COMMA"', () => {
    expect(lookup('\u060C')).to.equal('CS');
  });

  it('should return "ES" for "U+207A SUPERSCRIPT PLUS SIGN"', () => {
    expect(lookup('\u207A')).to.equal('ES');
  });

  it('should return "ET" for "U+0024 DOLLAR SIGN"', () => {
    expect(lookup('\u0024')).to.equal('ET');
  });

  it('should return "FSI" for "U+2068 FIRST STRONG ISOLATE"', () => {
    expect(lookup('\u2068')).to.equal('FSI');
  });

  it('should return "L" for "U+0061 LATIN SMALL LETTER A"', () => {
    expect(lookup('a')).to.equal('L');
  });

  it('should return "LRE" for "U+202A LATIN SMALL LETTER A"', () => {
    expect(lookup('\u202A')).to.equal('LRE');
  });

  it('should return "LRI" for "U+2066 LEFT-TO-RIGHT ISOLATE"', () => {
    expect(lookup('\u2066')).to.equal('LRI');
  });

  it('should return "LRO" for "U+202D LEFT-TO-RIGHT OVERRIDE"', () => {
    expect(lookup('\u202D')).to.equal('LRO');
  });

  it('should return "NSM" for "U+0327 COMBINING CEDILLA"', () => {
    expect(lookup('\u0327')).to.equal('NSM');
  });

  it('should return "B" for "U+2029 PARAGRAPH SEPARATOR"', () => {
    expect(lookup('\u2029')).to.equal('B');
  });

  it('should return "PDF" for "U+202C POP DIRECTIONAL FORMATTING"', () => {
    expect(lookup('\u202C')).to.equal('PDF');
  });

  it('should return "PDI" for "U+2069 POP DIRECTIONAL ISOLATE"', () => {
    expect(lookup('\u2069')).to.equal('PDI');
  });

  it('should return "PDI" for "U+2069 POP DIRECTIONAL ISOLATE"', () => {
    expect(lookup('\u2069')).to.equal('PDI');
  });

  it('should return "R" for "U+05D0 HEBREW LETTER ALEF"', () => {
    expect(lookup('\u05D0')).to.equal('R');
  });

  it('should return "RLE" for "U+202B RIGHT-TO-LEFT EMBEDDING"', () => {
    expect(lookup('\u202B')).to.equal('RLE');
  });

  it('should return "RLI" for "U+2067 RIGHT-TO-LEFT ISOLATE"', () => {
    expect(lookup('\u2067')).to.equal('RLI');
  });

  it('should return "RLO" for "U+202E RIGHT-TO-LEFT OVERRIDE"', () => {
    expect(lookup('\u202E')).to.equal('RLO');
  });

  it('should return "S" for "U+000B LINE TABULATION"', () => {
    expect(lookup('\u000B')).to.equal('S');
  });

  it('should return "WS" for "U+0020 SPACE U+0020', () => {
    expect(lookup('\u0020')).to.equal('WS');
  });

});
