export interface Location{
    location: string, 
    status:boolean,
    id: string
}
export interface Department{
    department:string,
    status:boolean,
    id: string
}
export interface Section{
    department:string,
    section:string,
    status:boolean,
    parentId: string,
    id: string
}