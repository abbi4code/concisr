import prisma from "@/lib/db";
import  {AuthOptions, ISODateString, User} from "next-auth"
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";



export interface CustomSession {
    user?: CustomUser,
    expires?: ISODateString
}

export interface CustomUser{
    id?: string | null,
    name?: string | null,
    email?: string | null,
    image?: string | null,
    provider?: string | null
}

export const authOptions:AuthOptions = {
    pages: {
        signIn: "/"
    },
    callbacks:{
        //this two parameters feed in to this as objs from when we use a provider as a signIn
        async signIn({user,account}) {
            try {
                const existUser = await prisma.user.findUnique({
                    where: {
                        email: user.email!                 
                    }
                })
                if(existUser){
                    // This is important because NextAuth does not automatically add your database’s unique ID to the user object. By doing this, you ensure that the ID is available later in the session and token callbacks, enabling you to identify this user in other parts of your application.
                    user.id = existUser?.id.toString()
                    return true
                }

                const newUser = await prisma.user.create({
                    data:{
                        email: user.email,
                        name: user.name,
                        oauth_id: account?.providerAccountId,
                        provider: account?.provider,
                        image: user?.image
                    }
                });
                user.id = newUser?.id.toString();
                return true;
                
            } catch (error) {
                console.log("error", error)
                return false
                
            }
        },

        //need to create a jwt token
//         By adding user to token.user, you make the user's information available within the token. This allows you to later access token.user in other parts of the NextAuth flow, such as in the session callback.
// This is especially useful for identifying or authorizing the user in authenticated API requests without querying the database each time.
        async jwt({token,user}){
            console.log("before token changed", token )
            if(user){
                token.user = user
            }
            return token
        },
        //sesssion creation

        async session({session,token,user}:{session:CustomSession,token:JWT, user: User}){
            session.user = token.user as CustomUser
            return session;

        },
    },
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
          authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code",
            },
          },
        }),
      ],
}