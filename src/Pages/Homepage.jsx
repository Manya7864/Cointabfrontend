import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchdata,deletedata } from '../Redux/action'
import {Button,VStack,Heading, Stack, Box} from "@chakra-ui/react"
import { useToast } from '@chakra-ui/react'
const Homepage = () => {
    let dispatch=useDispatch()
    let navigate=useNavigate()
    let {loading,delete_error,success,user_error,userdata}=useSelector(state=>state)
    const toast = useToast()

    let savetodatabase=()=>{
         dispatch(fetchdata(url))
        if(loading){
            alert("Alert:fetching data in progress")
        }
        if(success){
            toast({
                position:"top",
                title: 'Data fetched.',
                description: "We've fetched data from api.",
               
                status: 'success',
                duration: 1000,
                isClosable: true,
              })
        }
    }

    let deleteall=()=>{
        alert("Alert :Will delete all entries")
dispatch(deletedata())


    }

    let getuserdetails=()=>{
navigate("/userdetails")
    }
    let url="https://randomuser.me/api/?results=100"
  return (
    <div>
        <Stack border="1px solid black" bg="green" height="80px" spacing={"20px"}> <Heading mt="15px" color="white">Home Page</Heading></Stack>
        
    <Box style={{display:'flex',gap:"20px",marginLeft:"180px"}}>
       
        <Button onClick={savetodatabase} colorScheme='orange' size='md' height="70px" width="300px"  >Fetch details</Button>
        <Button colorScheme='orange' size='md' height="70px" width="300px"  onClick={deleteall}>Delete details</Button>
        <Button colorScheme='orange' size='md' height="70px" width="300px"  onClick={getuserdetails}>User details</Button>
    </Box>
    </div>
  )
}

export default Homepage
