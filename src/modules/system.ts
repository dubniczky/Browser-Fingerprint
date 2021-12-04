/**
 * Returns predicted operating system using `navigator.userAgent`.
 */
export function os() : string
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

/**
 * Returns the number of usable cpu cores (threads) using `navigator.hardwareConcurrency`
 */
export function cores() : Number
{
    return navigator.hardwareConcurrency ?? null
}

/**
 * Return the installed gpu using webgl
 */
export function gpu() : string
{
    let canvas = document.createElement("canvas")
    let webgl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    if (!webgl)
    {
        return 'NOWEBGL'
    }
    
    // @ts-ignore
    let debugInfo = webgl.getExtension("webgl_debug_renderer_info")
    // @ts-ignore
    return webgl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
}

/**
 * Returns the screen sizes and color depth in WxH-c string using `screen` object. 
 */
export function screen() : string
{
    return window.screen.width + 'x' + window.screen.height + '-' + window.screen.colorDepth
}

/**
 * Predicts if the system has a battery using `navigator.getBattery()`.
 */
export function battery() : boolean
{
    try
    {
        // @ts-ignore
        let battery:any = window.navigator.getBattery()
    
        return !(battery.charging == true && 
                battery.chargingTime == 0 &&
                battery.dischargingTime == Infinity &&
                battery.level == 1)
    }
    catch
    {
        return null
    }
}