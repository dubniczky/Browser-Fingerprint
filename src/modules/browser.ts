/**
 * Returns whether `window.Worker` is supported.
 */
export function worker() : boolean
{
    return window.Worker ? true : false   
}


/**
 * Returns a `navigator.userAgent` string without versions for persistence after updates.
 */
export function cleanagent() : string
{
    let userAgent:string = window.navigator.userAgent
    
    //Simplify
    userAgent = userAgent.replace(/[0-9. ]/g, '?')

    return userAgent
}


/**
 * Returns a list of installeg plugins using `navigator.plugins`.
 * Deprecated, will be removed in the future.
 */
export function plugins() : string
{
    try
    {
        let plugins:PluginArray = window.navigator.plugins
    
        let length = plugins.length
        let list = []
        for (let i = 0; i < length; i++)
        {
            list.push( plugins[i].name )
        }

        return list.join(',')
    }
    catch
    {
        return null
    }
}


/**
 * Gets the browser app name using `navigator.appName` and `navigator.appCodeName`.
 */
export function name() : string
{
    return (navigator.appName ?? null) + ',' + (navigator.appCodeName ?? null) + ',' + (navigator.appVersion ?? null)
}


/**
 * Get current browser window height using `window.outerWidth`.
 */
export function width() : number
{
    return window.outerWidth
}


/**
 * Get current browser window height using `window.outerHeight`.
 */
export function height() : number
{
    return window.outerHeight
}


/**
 * Returns a `navigator.userAgent` string.
 */
export function agent() : string
{
    return window.navigator.userAgent
}


/**
 * Returns a `navigator.languages` as semicolon separated string.
 */
export function language() : string
{
    return navigator.languages.join(';')
}