import { Table, TableCell, TableRow, TableHead, TableBody, Button } from "@mui/material";
function Farmer(){
    const tableStyle = {
        width: "80%",
        margin: "20px 10%"
      }
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
