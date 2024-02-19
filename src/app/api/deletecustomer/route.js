
import { NextRequest, NextResponse } from 'next/server';
import pool from '@/database/db';

export async function PUT(req, res) {
    try {
        const body = await req.json();
        const { selectedId } = body;

        const getConn = await pool.getConnection()

        const [rows] = await getConn.execute("CALL deleteCustomer(?)", [selectedId]);

        return NextResponse.json({ result: rows }, { status: 200 });
        
    } catch (error) {
        console.error('Error during customer delete:', error);
        return NextResponse.json({ error: 'Failed to delete customer' }, { status: 500 });
    }
}