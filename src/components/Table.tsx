import { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const URL = "https://jsonplaceholder.typicode.com/posts";

const Table = () => {
  const [apiData, SetData] = useState<Data[]>([]);
  const [loading, SetLoading] = useState(false);
  const [error, SetError] = useState("");

  useEffect(() => {
    async function getData() {
      SetLoading(true);
      try {
        const response = await fetch(URL);
        const json = await response.json();
        SetData(json as Data[]);
        SetLoading(false);
      } catch (error) {
        SetError("Unable to get data");
        SetLoading(false);
      }
    }

    getData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>Loading.....</div>;
  }

  const getRowId = (row: Data) => row.id;

  const getRowHeight = () => 70;

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "title",
      headerName: "Title",
      width: 600,
      renderCell: (params) => (
        <div style={{ whiteSpace: "normal" }}>{params.value}</div>
      ),
    },
    {
      field: "body",
      headerName: "Body",
      width: 600,
      renderCell: (params) => (
        <div style={{ whiteSpace: "normal" }}>{params.value}</div>
      ),
    },
    { field: "userId", headerName: "User ID", width: 90 },
  ];

  return (
    <div style={{ height: "50vh", width: "100%", textAlign: "center" }}>
      <DataGrid
        rows={apiData}
        columns={columns}
        getRowId={getRowId}
        getRowHeight={getRowHeight}    
      
      />
    </div>
  );
};

export default Table;
