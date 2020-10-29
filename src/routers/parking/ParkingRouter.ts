import { NextFunction, Request, Response, Router } from 'express';

class ParkingRouter {
  private _router = Router();

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
    this._router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const id = req.params.id;
        res.status(200).json("");
      }
      catch (error) {
        next(error);
      }
    });
  }
}

export = new ParkingRouter().router;
