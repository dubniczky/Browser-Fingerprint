/**
 * Returns a `navigator.userAgent` string without versions for persistence after updates.
 */
export default function() : string
{
    let userAgent:string = window.navigator.userAgent
    
    //Simplify
    userAgent = userAgent.replace(/[0-9. ]/g, '?')

    return userAgent
}