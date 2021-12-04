/**
 * Returns predicted operating system using `navigator.userAgent`.
 */
export default function() : string
{
    let ua:string = window.navigator.userAgent
    let os:string = null

    if ( ua.indexOf("X11")     != -1 ) os = "unix"
    if ( ua.indexOf("Linux")   != -1 ) os = "linux"
    if ( ua.indexOf("Win")     != -1 ) os = "windows"
    if ( ua.indexOf("Mac")     != -1 ) os = "mac"
    if ( ua.indexOf("Android") != -1 ) os = "android" //will override linux

    return os
}