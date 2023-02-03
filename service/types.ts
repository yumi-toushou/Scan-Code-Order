export type User = {username: string, password: string, authority: Number}

export type Entity = {id: string, name: string}
export type Relation = {id: Number, source: string, target:string, label: string}