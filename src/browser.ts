//System
import OperatingSystem from './properties/os'
import Cores from './properties/cores'
import Gpu from './properties/gpu'
import ScreenSize from './properties/screensize'

//Browser
import WindowWorker from './properties/worker'
import Plugins from './properties/plugins'
import UserAgent from './properties/useragent'
import Language from './properties/language'
import BrowserName from './properties/browsername'


//Properties interface
export interface PersistentProperties
{
    "system.os":         ReturnType<typeof OperatingSystem>,
    "system.cores":      ReturnType<typeof Cores>,
    "system.gpu":        ReturnType<typeof Gpu>,
    "system.screensize": ReturnType<typeof ScreenSize>,

    "browser.worker":   ReturnType<typeof WindowWorker>,
    "browser.agent":    ReturnType<typeof UserAgent>,
    "browser.plugins":  ReturnType<typeof Plugins>,
    "browser.language": ReturnType<typeof Language>,
    "browser.name":     ReturnType<typeof BrowserName>,
}


//Gather properties
export async function props() : Promise<PersistentProperties>
{
    let props:PersistentProperties =
    {
        "system.os": OperatingSystem(),
        "system.cores": Cores(),
        "system.gpu": Gpu(),
        "system.screensize": ScreenSize(),

        "browser.worker": WindowWorker(),
        "browser.agent": UserAgent(),
        "browser.plugins": Plugins(),
        "browser.language": Language(),
        "browser.name": BrowserName(),
    }

    return props
}
