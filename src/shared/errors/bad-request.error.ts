export default class BadRequestError extends Error {
  statusCode: number
  body: any

  constructor(message = 'Bad Request Error', code?: string) {
    super()

    const error = {
      statusCode: 400,
      body: {
        statusCode: 400,
        message: message,
        code: code
      }
    }

    this.statusCode = error.statusCode
    this.body = error.body
  }
}
