export interface IMerchandise {
    id: number
    creationDateTime: string
    imageBase64: string
    price: string
    type: string
    merchTypeName: string
}

export interface ILocalCommittee {
    id: string
    name?: string
    code?: string
    localCommitteeId?: number
}

export type MerchandiseReducer = {
    isLoadingMerchandiseList: boolean
    MerchandiseList: IMerchandise[] | []
}
export type UserReducer = {
    isCheckingPassCode: boolean
    userName: string
    localCommittee: ILocalCommittee | {}
}

export type GeneralAction = {
    type: string
    payload?: any
}

export type DispatchType = (args: GeneralAction) => GeneralAction