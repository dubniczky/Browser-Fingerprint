//Modules
import * as system from './modules/system'
import * as browser from './modules/browser'


//Peroperty interfaces
export interface PersistentProperties
{
    "system.os":      ReturnType<typeof system.os>,
    "system.cores":   ReturnType<typeof system.cores>,
    "system.gpu":     ReturnType<typeof system.gpu>,
    "system.screen":  ReturnType<typeof system.screen>,
    "system.battery": ReturnType<typeof system.battery>,
    "system.touch":   ReturnType<typeof system.touch>,

    "browser.worker":   ReturnType<typeof browser.worker>,
    "browser.agent":    ReturnType<typeof browser.cleanagent>,
    "browser.plugins":  ReturnType<typeof browser.plugins>,
    "browser.language": ReturnType<typeof browser.language>,
    "browser.name":     ReturnType<typeof browser.name>,
}

export interface VolatileProperties
{
    "browser.width":  ReturnType<typeof browser.width>,
    "browser.height": ReturnType<typeof browser.height>,
    "browser.agent":  ReturnType<typeof browser.agent>,
}

export interface Properties
{
    persistent: PersistentProperties,
    volatile: VolatileProperties
}


//Gather properties
export async function props() : Promise<Properties>
{
    let persistent:PersistentProperties =
    {
        "system.os":      system.os(),
        "system.cores":   system.cores(),
        "system.gpu":     system.gpu(),
        "system.screen":  system.screen(),
        "system.battery": system.battery(),
        "system.touch":   system.touch(),

        "browser.worker":   browser.worker(),
        "browser.agent":    browser.cleanagent(),
        "browser.plugins":  browser.plugins(),
        "browser.language": browser.language(),
        "browser.name":     browser.name()
    }

    let volatile:VolatileProperties =
    {
        "browser.width":  browser.width(),
        "browser.height": browser.height(),
        "browser.agent":  browser.agent(),
    }

    return { persistent, volatile }
}
