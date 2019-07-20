import React, {Component} from "react";

import ReactTable from "react-table";
import "react-table/react-table.css";

const exact = (filter, row) => String(row[filter.id]) === filter.value;

const regex = (filter, row) => {
    const regex = new RegExp(filter.value,"i");
    return regex.test(row[filter.id])
};

export default class TableView extends Component {

    render() {
        const data = this.props.data.map(d => d);

        const firstColumn = [
            {
                Header: "Row",
                accessor: "fsuuid", // TODO: someday this needs to be automatically aligned with the uuid key from parent
                filterable: true,
                filterMethod: exact,
                maxWidth: 100
            }
        ];

        const otherColumns = this.props.keys
            .filter(k => k.display)
            .map(k => {
                    return (
                        {
                            Header: k.fieldname,
                            accessor: k.fieldname
                        }
                    )
            });

        const columns = otherColumns.length === 0 ? [] : firstColumn.concat(otherColumns);

        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <ReactTable
                    data={data}
                    columns={columns}
                    filterable={true}
                    defaultFilterMethod={regex}
                    showPaginationTop={false}
                    showPaginationBottom={true}
                    pageSizeOptions={[1, 5, 10, 25, 50, 100]}
                    defaultPageSize={100}
                    style={{
                        height: "90vh" // This will force the table body to overflow and scroll if warranted
                    }}
                    className="-striped -highlight"
                />
            </div>
        )
    }
}