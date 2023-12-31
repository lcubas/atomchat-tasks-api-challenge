/* eslint-disable promise/no-callback-in-promise */
import type { NextFunction, Request, Response } from "express";

export const asyncMiddleware = (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };
