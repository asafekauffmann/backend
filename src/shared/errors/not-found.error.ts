export default class NotFoundError extends Error {
  statusCode: number
  body: any

  constructor(message = 'Record not found') {
    super()

    const error = {
      statusCode: 404,
      body: {
        statusCode: 404,
        message: message
      }
    }

    this.statusCode = error.statusCode
    this.body = error.body
  }
}
