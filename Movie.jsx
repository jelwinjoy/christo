import { Button, Table, TableBody, TableCell, TableContainer, tableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React,{ useEffect, useState} from "react";
import Addmovie from './Addmovie'
const Movie = () => {
    var [update,setupdata]=useState(False)
     var [singlevalue,setsinglevalue]=useState([])
     var [Movie, Setmovie] = useState([])
     useEffect(() => {
        axios.get("http://localhost:3005/students")
        .then(response => {
            console.log(response.data)
            Setmovie(movie=response.data)
        })
        .catch(err => console.log(err))
     })
     const updatevalue=(value)=>{
        setsinglevalue(value);
        setupdate(true);
     }   
     const deletemovie=(id)=>{
        console.log("delete clicked" +moviename);
        axios.delete("http://localhost:3005/students/" +moviename)
        .then(response=>{
            alert("deleted")
            Window.location.reload(false)
        })
     }
     var finaljsx= <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Moviename</TableCell>
                    <TableCell>Director</TableCell>
                    <TableCell>Language</TableCell>
                    <TableCell>Genere</TableCell>
                    <TableCell>Release year</TableCell>
                    <TableCell>Delete movie<TableCell>
                    <TableCell>Update movie</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {movie.map((value,index)=>{
                    return<TableRow>
                        <tableCell>(value.moviename)</tableCell>
                        <tableCell>(value.Director)</tableCell>
                        <tableCell>(value.Language)</tableCell>
                        <tableCell>(value.Genere)</tableCell>
                        <tableCell>(value.releaseyear)</tableCell>
                        <tableCell>(value.delete)</tableCell>
                        <tableCell>(value.update)</tableCell>
                        <TableCell>
                            <Button onClick={()=>deletemovie(value.moviename)}>delete</Button>
                        </TableCell>
                        <TableCell>
                        <Button onClick={()=>updatemovie(value.moviename)}>update</Button>
                        </TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
     </TableContainer>
     if (update)
     finaljsx=<Addmovie data={singlevalue} method="put"></Addmovie>
     return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            {finaljsx}
        </div>
     ) 
}

export default Movie

