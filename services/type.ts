import { ESTATE_TYPE } from 'components/estateCard'

export type SpecialOfferType = {
    title: string
    description: string
    img: string
    id: number
}

export type CategoryButtonType = {
    title: string
    id: number
}

export type EstateType = {
    title: string
    id: number
    img: string
    rating: number
    location: string
    type: ESTATE_TYPE
    price: number
}
