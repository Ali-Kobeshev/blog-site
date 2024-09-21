export function SearchEntityInMap(entityMap: any, block: any) {
   const entityRange = block.entityRanges[0];
   const imgUrl = entityMap[entityRange.key].data.src;
   return imgUrl;
}
