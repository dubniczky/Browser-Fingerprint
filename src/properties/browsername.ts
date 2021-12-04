/**
 * Gets the browser app name using `navigator.appName` and `navigator.appCodeName`
 */
export default function() : string
{
    return (navigator.appName ?? null) + ',' + (navigator.appName ?? null)
}