import { NextFunction, Request, Response, Router } from 'express';
import CityController from '../../controllers/CityController';

class CityRouter {
  private _router = Router();
  private _controller = CityController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching controller endpoints.
   */
  private _configure() {
    this._router.get('/', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = await this._controller.loadAllCities();
        res.status(200).json(result);
      }
      catch (error) {
        next(error);
      }
    });

    this._router.get('/id/:id', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const id = req.params.id;
        const result = await this._controller.loadParkingForCity(id);
        res.status(200).json(result);
      }
      catch (error) {
        next(error);
      }
    });
    this._router.get('/geo', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const lat = parseFloat(<string>req.query.lat);
        const lon = parseFloat(<string>req.query.lon);
        if (lat && lon) {
          const result = await this._controller.loadParkingForNearestCity(lat, lon);
          res.status(200).json(result);
        } else {
          res.status(400);
        }
      }
      catch (error) {
        next(error);
      }
    });
    this._router.get('/search', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const q = req.query.q
        if (q) {
          this._controller.loadParkingForAddress(q).then(
              result => {
                if (result) {
                  res.status(200).json(result);
                } else {
                  res.status(404).json(result);
                }
              }
          )
        } else {
          res.status(400);
        }
      }
      catch (error) {
        next(error);
      }
    });
  }
}

export = new CityRouter().router;
