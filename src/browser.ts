//System
import OperatingSystem from './properties/os'
import Cores from './properties/cores'
import Gpu from './properties/gpu'

//Browser
import WindowWorker from './properties/worker'
import Plugins from './properties/plugins'
import UserAgent from './properties/useragent'


//Properties interface
export interface PersistentProperties
{
    "system.os": ReturnType<typeof OperatingSystem>,
    "system.cores": ReturnType<typeof Cores>,
    "system.gpu": ReturnType<typeof Gpu>,

    "browser.worker": ReturnType<typeof WindowWorker>,
    "browser.agent": ReturnType<typeof UserAgent>,
    "browser.plugins": ReturnType<typeof Plugins>,
}


//Gather properties
export async function props() : Promise<PersistentProperties>
{
    let props:PersistentProperties =
    {
        "system.os": OperatingSystem(),
        "system.cores": Cores(),
        "system.gpu": Gpu(),

        "browser.worker": WindowWorker(),
        "browser.agent": UserAgent(),
        "browser.plugins": Plugins()
    }

    return props
}
