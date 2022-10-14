import { Table, TableCell, TableRow, TableHead, TableBody, Button } from "@mui/material";
import React,{useState, useEffect} from "react"
function Farmer(){
    const tableStyle = {
        width: "80%",
        margin: "20px 10%"
      }
  const [farmers, setFarmers]= useState([])

      useEffect(()=>  {
        fetch("http://127.0.0.1:3000/farmers")
        .then((res)=>  res.json())
        .then((data)=>{
            console.log(data)
            setFarmers(data)


        })
      },[])
    return(
        <div>
               <Table style={tableStyle}>
      <TableHead>
        <TableRow style={{ fontSize: "18px" }}>
          <TableCell>Name </TableCell>
          <TableCell>Id Number </TableCell>
          <TableCell>Membership Number</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {farmers.map((farmer)=>(
          <TableRow >
          <TableCell>{farmer.name}</TableCell>
          <TableCell>{farmer.id_number}</TableCell>
          <TableCell>{farmer.membership_number}</TableCell>
          <TableCell>
            <Button
              style={{ margin: "0px 20px" }}
              onClick={() => {
              }
              }
            > 

            </Button>
          </TableCell>
        </TableRow>
        ))}

      </TableBody>
    </Table>

        </div>
    )
}

export default Farmer;
