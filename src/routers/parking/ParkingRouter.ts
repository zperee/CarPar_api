import { NextFunction, Request, Response, Router } from 'express';
import ParkingController from '../../controllers/ParkingController';

class ParkingRouter {
  private _router = Router();
  private _controller = ParkingController;

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
    this._router.get('/id/:id', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const id = req.params.id;
        const result = await this._controller.loadParkingById(id);
        res.status(200).json(result);
      }
      catch (error) {
        next(error);
      }
    });
  }
}

export = new ParkingRouter().router;
