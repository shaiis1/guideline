import { FC } from "react"
import { useAppDispatch } from "../hooks"
import { getMessages } from "../slices/messagesSlice"
import "../styles/workerCard.css"

interface WorkerCardProps {
    name: string
    lastName: string
    departmentStr: string
    workerId: number
}

const WorkerCard:FC<WorkerCardProps> = ({
    name,
    lastName,
    departmentStr,
    workerId
}) => {
    const dispatch = useAppDispatch()

    return(
        <div className="cardWrapper" onClick={() => dispatch(getMessages(workerId))}>
            <p>{name}</p>  
            <p>{lastName}</p>  
            <p>{departmentStr}</p>
        </div>
    )
}

export default WorkerCard