/**
 * Predicts if the system has a battery using `navigator.getBattery()`.
 */
export default function() : boolean
{
    try
    {
        // @ts-ignore
        let battery:any = window.navigator.getBattery()
    
        return !(battery.charging == true && 
                 battery.chargingTime == 0 &&
                 battery.dischargingTime == Infinity &&
                 battery.level == 1)
    }
    catch
    {
        return null
    }
}