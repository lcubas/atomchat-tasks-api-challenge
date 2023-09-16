import { type ValidationChain, body } from "express-validator"

export const createTaskValidation = (): ValidationChain[] => {
  return [
    body('title')
      .isString()
      .withMessage('El campo "title" es un campo requerido')
      .isLength({ min: 1 })
      .withMessage('El campo "title" no puede estar vacío'),
    body('description')
      .isString()
      .withMessage('El campo "description" es un campo requerido')
      .isLength({ min: 1 })
      .withMessage('El campo "description" no puede estar vacío'),
  ]
}
