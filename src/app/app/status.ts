import { isNumeric } from 'rxjs/util/isNumeric';
import { SensorStatus } from './sensor-status';
import { DeviceStatus } from "./device-status";

export class Status {
    public sensors: SensorStatus;
    public devices: DeviceStatus;

    constructor (data: any) {
        console.log(data);
        this.sensors = new SensorStatus(data.sensors);
        this.devices = new DeviceStatus(data.devices);
    }
}