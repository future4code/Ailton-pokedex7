import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/HomePage/HomePage"
import DetailPage from "../Pages/DetailPage/DetailPage"
import Pokedex from "../Pages/Pokedex/Pokedex"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route index
        element = {<Home />} />
        <Route path= "/detailPage"
        element = {<DetailPage />} />
        <Route path="/pokedex"
        element = {<Pokedex />} />
        <Route path="*"
        element = {<ErrorPage />} />
        </Routes>
        </BrowserRouter>
    )
} 








