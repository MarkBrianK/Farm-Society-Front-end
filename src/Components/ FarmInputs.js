import { Table, TableCell, TableRow, TableHead, TableBody, Button } from "@mui/material";
import React,{useState, useEffect} from "react"
function FarmInput(){
    const tableStyle = {
        width: "80%",
        margin: "20px 10%"
      }
  const [farmersInputs, setFarmersInputs]= useState([])

      useEffect(()=>  {
        fetch("https://immense-dawn-24558.herokuapp.com/farmer_inputs")
        .then((res)=>  res.json())
        .then((data)=>{
            console.log(data)
            setFarmersInputs(data)


        })
      },[])
    return(
        <div>
               <Table style={tableStyle}>
      <TableHead>
        <TableRow style={{ fontSize: "18px" }}>
          <TableCell>Name </TableCell>
          <TableCell>Description </TableCell>
          <TableCell>Expiry Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {farmersInputs.map((input)=>(
          <TableRow >
          <TableCell>{input.name}</TableCell>
          <TableCell>{input.description}</TableCell>
          <TableCell>{input.expirydate}</TableCell>
          <TableCell>
            <Button
              style={{ margin: "0px 20px" }}
              onClick={() => {
              }
              }
            >Book

            </Button>
          </TableCell>
        </TableRow>
        ))}

      </TableBody>
    </Table>

        </div>
    )
}
export  default FarmInput
