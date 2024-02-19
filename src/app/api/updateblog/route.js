
import { NextRequest, NextResponse } from 'next/server';
import fs, { writeFile } from 'fs';
import path from 'path';
import pool from '@/database/db'; 

  
  export async function PUT(req) {
    try {

        const data = await req.formData()
        const image = data.get('image')
        const title = data.get('title')
        const content = data.get('content')
        const selectedId = data.get('selectedId')
        const previousimage = data.get('previousimage')
        if(!image) {
            return NextResponse.json({success1 : false})
        }

        const slug = title
        .toLowerCase()                 // Convert the title to lowercase
        .replace(/[^\w\s-]/g, '')      // Remove non-word characters (excluding spaces and dashes)
        .trim()                        // Trim leading and trailing spaces
        .replace(/\s+/g, '-')          // Replace spaces with dashes
        .replace(/-+/g, '-')

        
        if(typeof(image)==='object') {
   
            const previousImagePath = `./public/${previousimage}`;

                if (fs.existsSync(previousImagePath)) {
                    fs.unlinkSync(previousImagePath); // Delete the previous image file
                }

                const filenameParts = image.name.split('.');
                const fileExtension = filenameParts[filenameParts.length - 1];

                const bytes = await image.arrayBuffer();
                const buffer = Buffer.from(bytes)

               
                const path = `./public/blog_images/${slug}.${fileExtension}`
                await new Promise((resolve, reject) => {
                    fs.writeFile(path, buffer, (err) => {
                    if (err) reject(err);
                    else resolve();
                    });
                });

       }


       if(typeof(image)==='string') {

        const previousImagePath = `./public/${previousimage}`;

        const fileExtension = path.extname(previousImagePath);

        const trimmedExtension = fileExtension.replace('.', '')

        const newPath = `./public/blog_images/${slug}.${trimmedExtension}`

        if (fs.existsSync(previousImagePath)) {
            fs.renameSync(previousImagePath, newPath); // Rename the previous image file
        }

        const newImagePath = `/blog_images/${slug}.${trimmedExtension}`

        const getConn = await pool.getConnection()

        const [rows] = await getConn.execute("CALL updateBlog(?, ?, ?, ?,?)", [title, content, slug, newImagePath,selectedId]);

        return NextResponse.json({ result : rows}, { status: 200 });
            
   }
      
    if(typeof(image)==='object') {
        const filenameParts = image.name.split('.');
                const fileExtension = filenameParts[filenameParts.length - 1];

        const imagePath =  `/blog_images/${slug}.${fileExtension}`
        
                const getConn = await pool.getConnection()

                const [rows] = await getConn.execute("CALL updateBlog(?, ?, ?, ?,?)", [title, content, slug, imagePath,selectedId]);
        
                return NextResponse.json({ result : rows }, { status: 200 });
                
                 
       } 
      // Respond with success message
      } catch (error) {
        console.error('Error during blog addition:', error);
        return NextResponse.json({ success1: false, error: 'Failed to add blog' }, { status: 500 });
    }
  };

