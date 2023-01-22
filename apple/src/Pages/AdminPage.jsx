import { Divider, Table } from '@chakra-ui/react'
import React from 'react'
import AddProduct from '../Components/AddProduct'
import Footer from '../Components/Footer'
import TableComponent from '../Components/TableComponent'
const AdminPage = () => {
  return (
  <>
   
    <AddProduct />
    <Divider />
    <TableComponent />
         <Footer/>
      
      </>
  )
}

export default AdminPage