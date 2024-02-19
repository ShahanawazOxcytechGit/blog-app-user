
import { NextRequest, NextResponse } from 'next/server';
import pool from '@/database/db';

export async function POST(req, res) {
    try {
        const body = await req.json();
        const { name, email, mobileNumber, address } = body;

        const getConn = await pool.getConnection()

        const [rows] = await getConn.execute("CALL addCustomer(?, ?, ?, ?)", [name, email, mobileNumber, address]);

        return NextResponse.json({ result : rows}, { status: 200 });
        
    } catch (error) {
        console.error('Error during customer addition:', error);
        return NextResponse.json({ success1: false, error: 'Failed to add customer' }, { status: 500 });
    }
}