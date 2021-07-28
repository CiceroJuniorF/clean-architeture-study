/**
 * Irá interar os seguintes valores [0, "", null, undefined]
 * @param func 
 */
export function invalidValuesInterator(func:Function){
    const invalidValues = [0, "", null, undefined];
    for (const iv of invalidValues) {
        func(iv);
    }
}