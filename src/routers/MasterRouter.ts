import { Router } from 'express';
import ParkingRouter from './parking/ParkingRouter';
import CityRouter from './city/CityRouter';

class MasterRouter {
  private _router = Router();
  private _subrouterParking = ParkingRouter;
  private _subrouterCity = CityRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/parking', this._subrouterParking);
    this._router.use('/city', this._subrouterCity);
  }
}

export = new MasterRouter().router;
