
import { NextRequest, NextResponse } from 'next/server';
import pool from '@/database/db';

export async function PUT(req, res) {
    try {
        const body = await req.json();
        const { selectedId , name, email , mobileNumber , address } = body;

        const getConn = await pool.getConnection()

        const [rows] = await getConn.execute("CALL updateCustomer(?, ?, ?, ?, ?)", [name, email, mobileNumber, address, selectedId]);

        return NextResponse.json({ result: rows }, { status: 200 });
        
    } catch (error) {
        console.error('Error during customer update:', error);
        return NextResponse.json({  error: 'Failed to updated customer' }, { status: 500 });
    }
}