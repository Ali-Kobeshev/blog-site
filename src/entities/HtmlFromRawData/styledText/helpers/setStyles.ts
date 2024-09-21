import { InlineStyleRange, IBlock } from "../../../../shared/types";

export const SetStyles = (block: IBlock) => {
   const text = block.text;
   const splitted = text.split("");
   const withStyles = splitted.map((symbol: string) => ({
      symbol,
      styles: [] as string[],
   }));

   //apply styles to the corresponding symbols
   block.inlineStyleRanges.map(
      ({ offset: start, length, style }: InlineStyleRange) => {
         const end = start + length;
         for (let j = start; j < end; j++) {
            withStyles[j].styles.push(style);
         }
      }
   );

   //merge text chunks by styles to optimize rendering
   const areStylesEqual = (styles1: string[], styles2: string[]): boolean => {
      return (
         styles1.length === styles2.length &&
         styles1.every((style, index) => style === styles2[index])
      );
   };

   const mergedChunks = [];
   let symbolsToMerge: string[] = [];
   let startSymbolIndex = 0;

   for (let i = 0; i < withStyles.length; i++) {
      const { symbol, styles } = withStyles[i];
      const stylesToCompare = withStyles[startSymbolIndex].styles;

      if (areStylesEqual(styles, stylesToCompare)) {
         symbolsToMerge.push(symbol);
      } else {
         const mergedChunk = symbolsToMerge.join("");
         mergedChunks.push({
            chunk: mergedChunk,
            styles: withStyles[startSymbolIndex].styles,
         });
         //prepare data for further correct operation of the loop
         startSymbolIndex = i;
         symbolsToMerge = [symbol];
      }
   }

   //add the last chunk after the loop finishes
   if (symbolsToMerge.length > 0) {
      const mergedChunk = symbolsToMerge.join("");
      mergedChunks.push({
         chunk: mergedChunk,
         styles: withStyles[startSymbolIndex].styles,
      });
   }

   return mergedChunks;
};
