export const BASE_URL = 'http://momentum21registration.uaenorth.azurecontainer.io';

export const END_POINTS = {
    ENUMS: {
        LCS: `${BASE_URL}/LCs`,
        FUNCTIONS: `${BASE_URL}/Functions`,
        ROLES: `${BASE_URL}/Roles`,
        MERCHANDISE_TYPE: `${BASE_URL}/MerchandiseType`,
        TSHIRT_SIZES: `${BASE_URL}/TshirtSizes`,
    },
    LC_LOOK_UP: `${BASE_URL}/LcLookUp/{code}`,
    MERCHANDISE: {
        MERCHANDISE: `${BASE_URL}/Merchandise`,
        MERCHANDISE_ITEM: `${BASE_URL}​/Merchandise​/{Id}`,
        MERCHANDISE_MANY: `${BASE_URL}​/many`,
    }
}