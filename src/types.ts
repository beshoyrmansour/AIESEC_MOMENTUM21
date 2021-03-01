export interface IMerchandise {
    id: number
    creationDateTime: string
    imageBase64: string
    price: string
    type: string
    merchTypeName: string
}

export interface ILocalCommittee {
    name?: string
    localCommitteeId?: number
}
export interface IListItem {
    id: number
    label: string
}

export type MerchandiseReducer = {
    isLoadingMerchandiseList: boolean
    MerchandiseList: IMerchandise[] | []
    userMerchandise: IUserMerchandise[] | []
}
export type ConfigsReducer = {
    isLoadingAIESIC_Functions: boolean
    AIESIC_Functions: IListItem[] | []
    isLoadingAIESIC_ROLES: boolean
    AIESIC_ROLES: IListItem[] | []
}
export type UserReducer = {
    isCheckingPassCode: boolean
    userName: string
    id: string
    checkingPassCodeErrorMSG: string
    localCommittee: ILocalCommittee | {}
    userInfo: IUserInfo | {}
}

export type GeneralAction = {
    type: string
    payload?: any
}
export type IUserMerchandise = {
    id?: number
    amount?: number
}

export type IUserInfo = {
    fullName: string
    gender: string
    phone: string
    email: string
    function: string
    role: string
}

export type DispatchType = (args: GeneralAction) => GeneralAction