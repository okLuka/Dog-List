"use client"

import { Provider } from "react-redux"
import { ReactNode } from "react"
import store from "./store"

interface Props {
    children: ReactNode
}

export default function StoreProvider({children} : Props) {
    return (
        <Provider store={store}>{children}</Provider>
    )
}

