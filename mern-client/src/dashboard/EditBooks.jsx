import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl} = useLoaderData();

  // handle book submission
  const handleUpdate = (event) =>{
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName =form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;
    const bookDescriptions = form.bookDescriptions.value;
    const bookPdfUrl = form.bookPdfUrl.value;
   
    const updateBookObj ={
     bookTitle, authorName, imageUrl, category, bookDescriptions,bookPdfUrl
    }
    // console.log(bookObj)
    // update book data
     fetch (`https://book-shelf-1.onrender.com/book/${id}`,  {
      method:"PATCH",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(updateBookObj)
     }).then(res =>res.json()).then(data => {
      //console.log(data)
      alert("Book updated Successfully !!! ")
  })
    
     }
   
     return (
       <div className='px-4 my-12'>
         <h2 className='mb-8 text-3xl font-bold'>Edit Book</h2>
   
         <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
           
           {/* First Row */}
         <div className='flex gap-8'>
         <div className='lg:w-1/2'>
           <div className="mb-2 block">
             <Label htmlFor="bookTitle" value="Book Title" />
           </div>
           <TextInput id="bookTitle" 
           name='bookTitle'
           type="text" 
           defaultValue={bookTitle}
           placeholder="Book Name" required />
         </div>
         {/*Author Name */}
         <div className='lg:w-1/2'>
           <div className="mb-2 block">
             <Label htmlFor="authorName" value="Author Name" />
           </div>
           <TextInput id="authorName" 
           name='authorName'
           type="text" 
           defaultValue={authorName}
           placeholder="Author Name" required />
         </div>
         </div>
           {/* Second Row */}
           <div className='flex gap-8'>
         <div className='lg:w-1/2'>
           <div className="mb-2 block">
             <Label htmlFor="imageUrl" value="Book Image Url" />
           </div>
           <TextInput id="imageUrl" 
           name='imageUrl'
           type="text" 
           defaultValue={imageUrl}
           placeholder="Book Image Url" required />
         </div>
          {/* categories Row */}
          <div className="lg:w-1/2">
         <div className="mb-2 block">
           <Label htmlFor="category" name="category" value="Select book category" />
         </div>
         <Select id="category" defaultValue={category} required>
           <option>Mystery & Thriller</option>
           <option>Fiction</option>
           <option>Non-Fiction</option>
           <option>Fantasy</option>
           <option>Horror</option>
           <option>Romance</option>
           <option>AutoBiography</option>
           <option>history</option>
           <option>Others</option>
         </Select>
       </div>
         
         </div>
         {/* Descriptions */}
         <div>
   
           <div className="mb-2 block">
             <Label htmlFor="bookDescriptions" value="Book Descriptions" />
           </div>
           <Textarea id="bookDescriptions" name='bookDescriptions' defaultValue={bookDescription} placeholder="Describe your book here..." required rows={4} />
           
         </div>
         
         {/* bookpdflink */}
         <div>
           <div className="mb-2 block">
             <Label htmlFor="bookPdfUrl" value="Book Pdf Url" />
           </div>
           <TextInput id="bookPdfUrl" type="text" defaultValue={bookPdfUrl} placeholder="Book Pdf Url" required />
         </div>
       
         <Button type="submit" className='mt-5 bg-yellow-300'>Edit Book</Button>
   
       </form>
       </div>
  )

}

export default EditBooks