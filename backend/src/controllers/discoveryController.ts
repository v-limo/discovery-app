import { NextFunction, Request, Response } from 'express'

import service from '../services/discoveryService'
import { Location } from '../types/discoveryTypes'

export const getDiscovery = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.query.lon || !req.query.lat) {
    next(new Error('Invalid Request'))
  }

  const { lon, lat } = req.query
  const location: Location = {
    latitude: Number(lat),
    longitude: Number(lon),
  }

  res.json(service.discovery(location))
}
