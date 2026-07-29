// Splits a translated line on *emphasis* markers so translators can place
// emphasis wherever it falls naturally in their language, rather than at a
// fixed word index. "Now *with* her" -> [{t:"Now "}, {t:"with", em:true}, {t:" her"}]
export function splitEmphasis(line) {
  return line
    .split(/\*([^*]+)\*/g)
    .map((part, i) => ({ t: part, em: i % 2 === 1 }))
    .filter((part) => part.t !== "");
}
