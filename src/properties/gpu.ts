/**
 * Return the installed gpu using webgl
 */
export default function() : string
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