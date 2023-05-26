'use client'
import React from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Favorite = () => {

    const { data: session } = useSession()

    if (!session) {
        console.warn('nao entro aq?')
        redirect('/login')
    }

    return (
        <div>
            this is favorite page
        </div>
    );
};

export default Favorite;