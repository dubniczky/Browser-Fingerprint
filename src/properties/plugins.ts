/**
 * Returns a list of installeg plugins using `navigator.plugins`.
 * Deprecated, will be removed in the future
 */
export default function() : string
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