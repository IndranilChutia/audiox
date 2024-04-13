import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import sm from '../assets/seedheMaut.webp'
import { Clock, Play } from 'lucide-react';

const SongCard = () => {
    return (
        <Card className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-zinc-700 p-4 object-cover">
            <img src={sm} alt="sm" className='rounded' />
            <CardHeader className="px-0 py-4">
                <CardTitle>Luka Chippi</CardTitle>
                <CardDescription>Seedhe Maut, Bandozo3rd</CardDescription>
            </CardHeader>
            <CardDescription>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <Clock className='w-4 mr-1.5' /><p>3:15</p>
                    </div>
                    <div className='flex items-center'>
                        <Play className='w-4 mr-1.5' /><p>240k</p>
                    </div>
                </div>
            </CardDescription>
        </Card>
    );
};

export default SongCard;