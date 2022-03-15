import instance from "./index"

export function hello(){
  return instance.post(
    '/test'
  )
}