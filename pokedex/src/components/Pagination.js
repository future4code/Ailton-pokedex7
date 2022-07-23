import React from "react";
import { useContext } from "react";
import GlobalContext from "../../components/Global/GlobalContext";

const {pagination, setPagination, limit, setLimit} =
useContext(GlobalContext);

export default function usePagination() {
    limit = 30*(pagination-1)

    return(
<div>1 2 3 4 5 6</div>
    )
}