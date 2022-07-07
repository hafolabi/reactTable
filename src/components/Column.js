import { ColumnFilter } from "./ColumnFilter"

export const Columns = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        Filter: ColumnFilter,
        disableFilters: true
    },

    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
        Filter: ColumnFilter
    },

     {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
        Filter: ColumnFilter
    },

     {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email',
        Filter: ColumnFilter
    },

     {
        Header: 'Gender',
        Footer: 'Gender',
        accessor: 'gender',
        Filter: ColumnFilter
    },
]