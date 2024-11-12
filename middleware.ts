export { default } from "next-auth/middleware"

//so only dashboard route is protected
export const config = { matcher: ["/dashboard"] }