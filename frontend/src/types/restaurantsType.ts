export interface RestaurantsType {
  sections: SectionType[]
}

export interface SectionType {
  title?: string
  restaurants?: RestaurantType[]
}

export interface RestaurantType {
  blurhash: string
  launch_date: string
  location: number[]
  name: string
  online: boolean
  popularity: number
  distance: number
}

export type Location = {
  latitude: number
  longitude: number
}
