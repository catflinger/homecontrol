export class DeviceStatus {
    public boiler: boolean;
    public chPump: boolean;
    public hwPump: boolean;

    constructor (data: any) {
        this.boiler = data.boiler;
        this.chPump = data.chPump;
        this.hwPump = data.hwPump;
    }
}