import { Message } from "@/model/User";

export interface ApiResponse{
    success:boolean;
    messages:string;
    isAcceptingMessages?:boolean;
    message?: Array<Message>
}