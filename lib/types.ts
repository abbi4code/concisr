type CoinsType = {
    coins: Number;
}

type UserSummaries = {
    id: string;
    url: string;
    response?: string | null
    title?: string | null
    created_at: Date
}

type ChatType = {
    id: string
    url: string
    title:string
    response?: string | null
    user_id: number
    created_at: Date 
}
type AddUrlErrorType = {
    url?: string;
    user_id?: string;
  };