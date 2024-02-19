"use client";
import React, { useState, useMemo , useEffect} from "react";
import CommonTable from "../common/CommonTable";
import { Button , Dialog , DialogTitle ,DialogContent, TextField , DialogActions } from '@mui/material';
import { fakeData } from "./makeData";

export default function AllCustomer() {
  const [customersData, setCustomersData] = useState([])
  const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobileNumber, setMobileNumber] = useState();
    const [address, setAddress] = useState();
    const [selectedId , setSelectedId] = useState()
    const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
    const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
    
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        enableEditing: false,
        size: 80,
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "address",
        header: "Address",
      },
      {
        accessorKey: "mobile_no",
        header: "Mobile Number",
      },
      {
        accessorKey: "action",
        header: "Action",
        size: 150,
        Cell: ({ row }) => {
          return (
            <div className="text-xs">
              <div className="flex items-center gap-4">
                <button className="text-xs text-blue-500" type="button" onClick={() => handleCustomerEdit(row)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </button>
                <button className="text-xs text-red-700 " type="button" onClick={() => handleCustomerDelete(row)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        },
      },
    ],
    []
  );

  const handleGetCustomers = async (e) => {
    try {
        const response = await fetch("/api/displaycustomers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      } 
    });

     const { error , result } = await response.json();

        if(error!==undefined) {
            console.log('Customers Get error:', error);
        }
        setCustomersData(result)
        } catch (error) {
          console.error('Customers Get operation error', error);
      }  };

      useEffect(() => {
        handleGetCustomers();
        }, []); 

        const handleCustomerEdit = async (row) => {
          setSelectedId(row.original.id);
          setName(row.original.name);
          setEmail(row.original.email)
          setMobileNumber(row.original.mobile_no)
          setAddress(row.original.address)
          setUpdateModalOpen(true);
       }
   
       const handleCustomerUpdate = async (e) => {
           try {
               
               const response = await fetch("/api/updatecustomer", {
             method: "PUT",
             headers: {
               "Content-Type": "application/json",
             } ,
             body: JSON.stringify({ selectedId , name, email , mobileNumber , address }),
           });
       
            const { error , result } = await response.json();
       
               if(error!==undefined) {
                   console.log('Customer Updated error:', error);
               }
               setUpdateModalOpen(false)
               handleGetCustomers()
               } catch (error) {
                 console.error('Customer Update operation error', error);
             }  };

        const handleCustomerDelete = (row) => {
        setSelectedId(row.original.id);
        setDeleteConfirmationOpen(true);
        };
    
        const confirmDelete = async () => {
            try {
                const response = await fetch("/api/deletecustomer", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              } ,
              body: JSON.stringify({ selectedId }),
            });
        
              const { error , result } = await response.json();
        
                if(error!==undefined) {
                    console.log('Customer Deleted error:', error);
                }
                setDeleteConfirmationOpen(false);
                handleGetCustomers()
                } catch (error) {
                  console.error('Customer Delete operation error', error);
              } 
        };
    

  return (
    <>
      <h2 className="text-2xl font-bold">ITEM LIST</h2>
      <CommonTable columns={columns} data={customersData} />
      <Dialog open={isUpdateModalOpen} onClose={() => setUpdateModalOpen(false)}>
          <DialogTitle>Update Customer</DialogTitle>
          <DialogContent>
            <TextField sx={{marginTop : 1}}
              label="Customer Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField sx={{marginTop : 1 , marginLeft : 2}}
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField sx={{marginTop : 2 }}
              label="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <TextField sx={{marginTop : 2 , marginLeft : 2}}
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setUpdateModalOpen(false)}>Cancel</Button>
            <Button onClick={handleCustomerUpdate}>Update</Button>
          </DialogActions>
        </Dialog>
        <Dialog open={isDeleteConfirmationOpen} onClose={() => setDeleteConfirmationOpen(false)}>
                <DialogTitle>Delete Customer</DialogTitle>
                <DialogContent>
                    <p>Are you sure you want to delete this customer?</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteConfirmationOpen(false)}>Cancel</Button>
                    <Button onClick={confirmDelete} color="error">Delete</Button>
                </DialogActions>
            </Dialog>
    </>
  );
}
