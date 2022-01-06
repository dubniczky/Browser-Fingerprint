import * as browser from './fingerprint'
import md5 from './md5'

export async function run()
{
    const props:browser.Properties = await browser.props()

    return {
        fingerprint: md5(JSON.stringify(props.persistent)),
        volatileFingerprint: md5(JSON.stringify(props.volatile)),
        version: 'v0.2',
        details: props
    }
}