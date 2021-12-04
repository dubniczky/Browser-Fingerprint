import * as browser from './fingerprint'
import md5 from './md5'

export async function run()
{
    const properties:browser.Properties = await browser.props()
    const propstring:string = JSON.stringify(properties)

    return {
        fingerprint: md5(propstring),
        version: 'v0.2',
        details: properties
    }
}