import { TransportEnum } from '../enums/transport-enum';

export class CheckPoint {
  id: number;
  lat: number;
  lng: number;
  name?: string;
  arrivalTimestamp?: Date;
  depTimestamp?: Date;
  locale?: string;
  routeType: string; // trip or bike
  arrivalTransport: TransportEnum;
  depTransport: TransportEnum;
  // createdDate: string;
  // updatedDate: string;
  // weather: string;
}
