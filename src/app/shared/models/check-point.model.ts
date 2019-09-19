import { TransportEnum } from '../enums/transport-enum';
import { Marker } from './marker.model';

export class CheckPoint extends Marker {
  arrivalTimestamp?: Date;
  depTimestamp?: Date;
  locale?: string;
  routeType: string; // trip or bike
  arrivalTransport: TransportEnum;
  depTransport: TransportEnum;
  tripId: number;
  // createdDate: string;
  // updatedDate: string;
  // weather: string;
}
