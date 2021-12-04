/**
 * Returns the screen sizes and color depth in WxH-c string using `screen` object. 
 */
export default function() : string
{
    return screen.width + 'x' + screen.height + '-' + screen.colorDepth
}