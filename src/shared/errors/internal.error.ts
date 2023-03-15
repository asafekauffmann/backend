export default class InternalServerError extends Error {
  statusCode: number
  body: any

  constructor() {
    super()

    const error = {
      statusCode: 500,
      body: {
        statusCode: 500,
        message: 'Interval Server Error'
      }
    }

    this.statusCode = error.statusCode
    this.body = error.body
  }
}
