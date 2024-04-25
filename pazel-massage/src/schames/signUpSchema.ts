import {z} from 'zod'
export const usernameValidaton = z
.string()
.min(2,"Username must be at least 2 character")
.max(20,"Username must be no more than 20 characters")

export const signUpSchema = z.object({
    username: usernameValidaton,
    email: z.string().email({message:"Invalid email address"}),
    password: z.string().min(6,{message:"password must be at least 6 characters"})
})