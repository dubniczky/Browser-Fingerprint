/**
 * Returns the number of usable cpu cores (threads) using `navigator.hardwareConcurrency`
 */
export default function() : Number
{
    return navigator.hardwareConcurrency ?? null
}