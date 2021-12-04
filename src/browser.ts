//Modules
import * as system from './modules/system'
import * as browser from './modules/browser'


//Properties interface
export interface PersistentProperties
{
    "system.os":        ReturnType<typeof system.os>,
    "system.cores":     ReturnType<typeof system.cores>,
    "system.gpu":       ReturnType<typeof system.gpu>,
    "system.screen":    ReturnType<typeof system.screen>,
    "system.battery":   ReturnType<typeof system.battery>,

    "browser.worker":   ReturnType<typeof browser.worker>,
    "browser.agent":    ReturnType<typeof browser.agent>,
    "browser.plugins":  ReturnType<typeof browser.plugins>,
    "browser.language": ReturnType<typeof browser.language>,
    "browser.name":     ReturnType<typeof browser.name>,
}


//Gather properties
export async function props() : Promise<PersistentProperties>
{
    let props:PersistentProperties =
    {
        "system.os":        system.os(),
        "system.cores":     system.cores(),
        "system.gpu":       system.gpu(),
        "system.screen":    system.screen(),
        "system.battery":   system.battery(),

        "browser.worker":   browser.worker(),
        "browser.agent":    browser.agent(),
        "browser.plugins":  browser.plugins(),
        "browser.language": browser.language(),
        "browser.name":     browser.name()
    }

    return props
}
