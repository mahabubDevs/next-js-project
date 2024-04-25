import {z} from 'zod'

export const acceptMessageShcema = z.object({
    acceptMessages: z.boolean(),

})