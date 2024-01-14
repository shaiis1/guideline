import { createAsyncThunk, createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { GetMessages } from "../apis/messagesApi"
import { RootState } from "../store"

export interface messageType {
    id: number
}

export const messagesAdapter = createEntityAdapter<messageType>({
    selectId: (message) => message.id
})

export const workersSelectors =
messagesAdapter.getSelectors<RootState>((state) => state.workers)

export const { selectAll, selectById, selectEntities, selectTotal } =
workersSelectors

export const getMessages = createAsyncThunk(
    'messages/getMessages',
    async(workerId: number) => {
        try{
            const res = await GetMessages(workerId)
            return res
        }
        catch(err: any){
            return err.message
        }
    }
)

const messagesSlice = createSlice({
    name: 'messages',
    initialState: messagesAdapter.getInitialState({
        loading: false,
        error: '',
        messagesList: <any>[] 
    }),
    reducers: {

    },
    extraReducers(builder) {
        builder
        .addCase(getMessages.rejected,
            (state, action: PayloadAction<any>) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(
                getMessages.pending, (state) => {
                    state.loading = true
                }
            )
            .addCase(
                getMessages.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false
                    messagesAdapter.setAll(state, action.payload)
                    state.messagesList = action.payload
                }
            )
    }
})

export const messagesState = (state: RootState) => state.messages
export default messagesSlice.reducer