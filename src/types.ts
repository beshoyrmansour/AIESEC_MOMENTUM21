export interface IMerchandise {
    id: number
    creationDateTime: string
    imageBase64: string
    price: number
    type: number
    merchTypeName: string
    size?: string
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
    isUserInfoStepValid: boolean
    isUserIdPhotosValid: boolean
    isMerchandiseSelectorValid: boolean
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
    type: number
    merchTypeName: string
    quantity: number
    size?: string
    price: number
}

export type IUserInfo = {
    fullName: string
    gender: string
    phone: string
    email: string
    facebookLink: string
    function: string
    role: string
    passportImage: string
    nationalIdFrontImage: string
    nationalIdBackImage: string
    personalImage: string
}

export type DispatchType = (args: GeneralAction) => GeneralAction

export const IDOptions = {
    nationalId: 'nationalId',
    passport: 'passport'
} 