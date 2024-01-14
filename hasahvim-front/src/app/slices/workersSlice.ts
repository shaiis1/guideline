import { RootState } from "../store"
import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
    createEntityAdapter,
    EntityId
  } from '@reduxjs/toolkit'
import { GetWorkers } from "../apis/wokersApi"

export interface workerType {
    id: number
    name: string
    lastName: string
    phoneNumber: string
    address: string
    gender: number
    departmentType: number
    workerType: number
}

export const workersAdapter = createEntityAdapter<workerType>({
    selectId: (worker) => worker.id
})

export const workersSelectors =
workersAdapter.getSelectors<RootState>((state) => state.workers)

export const { selectAll, selectById, selectEntities, selectTotal } =
workersSelectors

export const getWorkers = createAsyncThunk(
    'workers/getWorkers',
    async() => {
        try{
            const res = await GetWorkers()
            return res
        }
        catch(err: any){
            return err.message
        }
    }
)

const workerSlice = createSlice({
    name: 'workers',
    initialState: workersAdapter.getInitialState({
        loading: false,
        error: '',
        workersList: <any>[] 
    }),
    reducers: {

    },
    extraReducers(builder) {
        builder
        .addCase(getWorkers.rejected,
            (state, action: PayloadAction<any>) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(
                getWorkers.pending, (state) => {
                    state.loading = true
                }
            )
            .addCase(
                getWorkers.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false
                    workersAdapter.setAll(state, action.payload)
                    state.workersList = action.payload
                }
            )
    }
})

export const workersState = (state: RootState) => state.workers
export default workerSlice.reducer