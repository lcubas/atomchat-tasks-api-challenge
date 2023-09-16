import { type ValidationChain, body } from "express-validator"

export const createTaskValidation = (): ValidationChain[] => {
  return [
    body('title')
      .exists()
      .withMessage('El campo "title" es un campo requerido')
      .notEmpty()
      .withMessage('El campo "title" no puede estar vacío'),
    body('description')
      .exists()
      .withMessage('El campo "description" es un campo requerido')
      .notEmpty()
      .withMessage('El campo "description" no puede estar vacío'),
  ]
}
