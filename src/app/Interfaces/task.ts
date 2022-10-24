export interface ITask {
    id: number,
    title: string,
    body?: string,
    date: Date,
    priority: "0" | "1" | "2",
    isCompleted: boolean
}