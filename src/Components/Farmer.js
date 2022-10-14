import { Table, TableCell, TableRow, TableHead, TableBody, Button } from "@mui/material";
import React,{useState, useEffect} from "react"
function Farmer(){
    const tableStyle = {
        width: "80%",
        margin: "20px 10%"
      }
      const [farmers, setFarmers]= useState([])

      useEffect(()=>  {
        fetch("https://immense-dawn-24558.herokuapp.com/farmers")
        .then((res)=>  res.json())
        .then((data)=>{
            console.log(data)
            setFarmer(data)

        })
      },[])
    return(
        <div>
               <Table style={tableStyle}>
      <TableHead>
        <TableRow style={{ fontSize: "18px" }}>
          <TableCell>Name </TableCell>
          <TableCell>Location</TableCell>
          <TableCell>Lead Mechanic</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          <TableRow >
            <TableCell>{}</TableCell>
            <TableCell>{}</TableCell>
            <TableCell>{}</TableCell>
            <TableCell>{}</TableCell>
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
      </TableBody>
    </Table>

        </div>
    )
}

export default Farmer;
