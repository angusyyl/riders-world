import { CheckPoint } from './shared/models/check-point.model';
import { TransportEnum } from './shared/enums/transport-enum';

// checkPoints: CheckPoint[] = [
//   // { id: 1, lat: 22.531664, lng: 114.114787, name: '羅湖汽車客運站', arrivalTimestamp: new Date(2019,6,29,10,30), depTimestamp: new Date(2019,6,29,10,50), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Train, depTransport: TransportEnum.Bus },
//   { id: 1, lat: 23.292724, lng: 113.837872, name: '增城二汽客運站', arrivalTimestamp: new Date(2019, 6, 29, 13, 20), depTimestamp: new Date(2019, 6, 29, 13, 20), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, depTransport: TransportEnum.Bike },
//   { id: 2, lat: 23.301143, lng: 113.841652, name: '西堤驛站', arrivalTimestamp: new Date(2019, 6, 29, 14, 0), depTimestamp: new Date(2019, 6, 29, 14, 16), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, depTransport: TransportEnum.Bike },
//   { id: 3, lat: 23.337663, lng: 113.834488, name: '增江畫廊', arrivalTimestamp: new Date(2019, 6, 29, 14, 39), depTimestamp: new Date(2019, 6, 29, 14, 42), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, depTransport: TransportEnum.Bike },
//   { id: 4, lat: 23.562432, lng: 113.773998, name: '白水寨大家族公館', arrivalTimestamp: new Date(2019, 6, 29, 19, 0), depTimestamp: new Date(2019, 6, 30, 11, 0), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, depTransport: TransportEnum.Bike }
// ];
export const CHECKPOINTS: CheckPoint[] = [
  { id: 1, lat: 53.347536, lng: -6.259409, name: '56 O"Connell Street Lower', arrivalTimestamp: new Date(2019, 6, 29, 13, 20), depTimestamp: new Date(2019, 6, 29, 13, 20), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, depTransport: TransportEnum.Bike, tripId: 5 },
  { id: 2, lat: 53.345789, lng: -6.235231, name: '70 Sir John Rogerson"s Quay', arrivalTimestamp: new Date(2019, 6, 29, 14, 0), depTimestamp: new Date(2019, 6, 29, 14, 16), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, depTransport: TransportEnum.Bike, tripId: 5 },
  { id: 3, lat: 53.348197, lng: -6.227083, name: 'R131', arrivalTimestamp: new Date(2019, 6, 29, 14, 39), depTimestamp: new Date(2019, 6, 29, 14, 42), locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, depTransport: TransportEnum.Bike, tripId: 5 }
];
