import {resend} from '@/lib/resend';
import VerificationEmail from '../../emailTemplate/EmailTemplateVerification';
import { ApiResponse } from '@/types/ApiResponse';

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
):Promise<ApiResponse>{
    try{
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Verification code',
            react: VerificationEmail({username, otp:verifyCode}),
          });
        return {success: false, messages:'Email to send verification Successfuly'}
    }catch(emailError){
        console.error("Error sending verification email",emailError)
        return {success: false, messages:'Failed to send verification email'}
    }
}