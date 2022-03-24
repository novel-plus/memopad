import { makeObservable, observable } from "mobx"

export default class Memo {
    title: string
    content: string
    createdAt: Date
    modifiedAt: Date
    constructor(title: string) {
        this.title = title
        this.content = ""
        this.createdAt = new Date()
        this.modifiedAt = new Date()
        makeObservable(this, {
            title: observable,
            content: observable
        })
    }


}