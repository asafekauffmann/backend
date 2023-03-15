import BadRequestError from './errors/bad-request.error'
import InternalServerError from './errors/internal.error'
import NotFoundError from './errors/not-found.error'

export default function HttpException(error: any) {
  if (error.code === 'P2002') {
    throw new BadRequestError('Unique constraint failed')
  } // registro com chaave unica duplicada

  if (error.code === 'P2025') {
    throw new NotFoundError()
  } // erro de excluir ja algo excluido ou editado

  if (error.code) {
    throw new BadRequestError(undefined, error.code)
  } // generic error

  throw new InternalServerError()
} // Erro inesperado
