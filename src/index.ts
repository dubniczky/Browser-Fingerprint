import * as browser from './browser'

if (window.Worker)
{
    document.write( JSON.stringify(browser.props()) )
}