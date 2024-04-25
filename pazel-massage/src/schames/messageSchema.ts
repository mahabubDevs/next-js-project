import {z} from 'zod'

export const messageSchema = z.object({
    content:z
    .string()
    .min(10,{message: 'Content must be at least of 10 characers'})
    .max(300,{message: 'Context maximum 300 characters'})

})