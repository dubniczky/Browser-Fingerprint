/**
 * Returns whether `window.Worker` is supported
 */
export default function() : boolean
{
    return window.Worker ? true : false   
}