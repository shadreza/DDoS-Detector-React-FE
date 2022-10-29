import React from 'react'
import { useRouteError } from "react-router-dom"
import { TbFaceIdError } from 'react-icons/tb'

function ErrorPage() {
    const error:any = useRouteError()
    console.error(error)
    return (
        <div className="text-white flex flex-col gap-y-8 text-center mt-20">
            <h1 className="text-4xl">Oops!</h1>
            <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
            <p className="text-xl">
                <i>{error.statusText || error.message}</i>
            </p>
            <TbFaceIdError className="text-6xl mx-auto"/>
        </div>
    )
}

export default ErrorPage