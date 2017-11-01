import { isNumeric } from 'rxjs/util/isNumeric';

export class SensorStatus {
    public hw: number;
    public bedroom: number;
    public garage: number;
    public loft: number;

    constructor (data: any) {
        this.hw = 0;
        this.bedroom = 0;
        this.garage = 0;
        this.loft = 0;

        if (isNumeric(data.hw)) this.hw = data.hw;
        if (isNumeric(data.bedroom)) this.bedroom = data.bedroom;
        if (isNumeric(data.garage)) this.garage = data.garage;
        if (isNumeric(data.loft)) this.loft = data.loft;
    }
}