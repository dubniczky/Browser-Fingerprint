import * as browser from './browser'

async function fingerpringBrowser()
{
    document.write( JSON.stringify(await browser.props()) )
}
fingerpringBrowser()