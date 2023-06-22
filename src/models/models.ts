export interface IQuoteData { data: any, loading: boolean, error: any }

export interface IPictureOfTheDay {
  copyright: string,
  date: string,
  explanation: string,
  hdurl?: string,
  media_type: string,
  service_version: string,
  title: string,
  url: string
}