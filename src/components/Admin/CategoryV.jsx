import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import baseUrl from '../../Api'
import Categoryedit from './Categoryedit';
import Sidebar from './Sidebar';
import Topbar from './Topbar';


const CategoryV = () => {
  var[Category,setCategory] = useState([]);
  var[selected,setSelected] = useState();
  var[update,setUpdate] = useState(false);


  useEffect(()=>{
      axios.get(baseUrl + "/category/cfetch")
      .then(response =>{
          console.log(response.data)
          setCategory(response.data)
      })
      .catch(err=>console.log(err))
  },[])

const deletevalues =(id)=>{
  console.log("deleted",id)
  axios.put(baseUrl+"/category/updatestatus/"+id)
  .then((response)=>{
      alert("DELETED")
   })
}

const updatevalues =(value)=>{
console.log("updated",value);
setSelected(value);
setUpdate(true);
}
var result=

<div >
<Topbar/>
<Sidebar/>
<div className='aa'>
<Typography >CATEGORY VIEW</Typography><br/><br/>
<TableContainer>
<Table >
<TableHead>
  <TableRow >
    <TableCell >Category ID</TableCell>
    <TableCell >Category Name</TableCell>
    <TableCell >Status</TableCell>
    <TableCell>Edit</TableCell>
    <TableCell>Delete</TableCell>
  </TableRow>
</TableHead>
<TableBody>
    {Category.map((value,index)=>{
        return(
            <TableRow key={index}>
                <TableCell>{value._id}</TableCell>
                <TableCell>{value.Categoryname}</TableCell>
                <TableCell>{value.Status}</TableCell>
                <TableCell><ModeEditOutlineIcon color='success' onClick={()=>updatevalues(value)}/></TableCell>
                <TableCell><DeleteForeverIcon color='error' onClick={()=>deletevalues(value._id)}/></TableCell>
            </TableRow>
        )
    })}
</TableBody>
</Table>
</TableContainer>
</div>
</div>

if(update)
    {
      result=<Categoryedit data={selected} method='put'/>
    }
return (result)
}

export default CategoryV