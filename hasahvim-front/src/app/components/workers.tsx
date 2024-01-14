import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks"
import { getWorkers, workersState, workerType } from "../slices/workersSlice"
import WorkerCard from "./workerCard"

const Workers = () => {
    const dispatch = useAppDispatch()
    const { loading, workersList} = useAppSelector(workersState)

    useEffect(() => {
        dispatch(getWorkers())
    }, [])

    return(
        <>
            {!loading && workersList && workersList.length > 0 && ( 
                workersList.map((worker: any, index: any) => (
                    <>
                    <WorkerCard name={worker.originalWorker.name} lastName={worker.originalWorker.lastName} departmentStr={worker.departmentStr} workerId={worker.originalWorker.id}/>
                    </>
                ))
            )}
        </>
    )
}

export default Workers