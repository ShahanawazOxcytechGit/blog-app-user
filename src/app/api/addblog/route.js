
import { NextRequest, NextResponse } from 'next/server';
import fs, { writeFile } from 'fs';
import pool from '@/database/db';

  
  export async function POST(req) {
    try {

        const data = await req.formData()
        const image = data.get('image')
        const title = data.get('title')
        const content = data.get('content')
        if(!image) {
            return NextResponse.json({success1 : false})
        }

        const slug = title
        .toLowerCase()                 // Convert the title to lowercase
        .replace(/[^\w\s-]/g, '')      // Remove non-word characters (excluding spaces and dashes)
        .trim()                        // Trim leading and trailing spaces
        .replace(/\s+/g, '-')          // Replace spaces with dashes
        .replace(/-+/g, '-')

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

        const imagePath =  `/blog_images/${slug}.${fileExtension}`

        
     
      const getConn = await pool.getConnection()

        const [rows] = await getConn.execute("CALL addBlogs(?, ?, ?, ?)", [title, content, slug, imagePath]);

        
        return NextResponse.json({ result : rows }, { status: 200 });
  
      // Respond with success message
      } catch (error) {
        console.error('Error during blog addition:', error);
        return NextResponse.json({ success1: false, error: 'Failed to add blog' }, { status: 500 });
    }
  };

