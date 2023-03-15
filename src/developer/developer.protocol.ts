export interface DeveloperCreateRequest {
  name: string
  genre: string
  birth: Date
  age: number
  hobby: string
  levelId: number
}

// define o modelo que se passa os dados do controller para o service.