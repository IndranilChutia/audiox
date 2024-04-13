import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Home, Package2, Play, Search, SkipBack, SkipForward } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import SongCard from '@/components/SongCard';


const Dashboard = () => {
    return (
        <div className='dark flex min-h-screen w-full flex-col bg-[#141518] text-white'>
            <aside className="fixed inset-y-0 left-0 z-10 hidden sm:flex w-14 bg-gray-900 flex-col border-r bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-zinc-700">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
                    <Link
                        href="#"
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                        <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                        <span className="sr-only">MellowPhile</span>
                    </Link>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Home className="h-5 w-5" />
                                    <span className="sr-only">Dashboard</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Dashboard</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>
            <div className='sm:pl-14 py-4'>
                <nav className='flex justify-between items-center gap-20 w-full px-4'>
                    <h1 className='text-2xl font-medium tracking-wide'>MellowPhile</h1>
                    <div className="relative ml-auto flex-1 md:grow-0">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground z-10 " />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="w-full rounded-lg bg-background pl-8 md:w-[280px] lg:w-[320px] bg-gray-900 border-r bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-zinc-700"
                        />
                    </div>
                </nav>
                <div className='px-4 mt-6'>
                    <h2 className='font-light text-xl opacity-80 my-6'>All Songs</h2>
                    <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                        {Array(6).fill().map((index) => {
                            return <SongCard key={index} />
                        })}
                    </div>
                </div>
            </div>

            <div className='sm:pl-14 flex justify-center items-center fixed bottom-0 z-20 h-14 w-full bg-gray bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border-t bg-black border-zinc-700'>
                <div className='px-4 flex justify-between items-center gap-20 w-full'>
                    <div className='flex items-center gap-4'>
                        <SkipBack />
                        <Play />
                        <SkipForward />
                    </div>
                    <div className='h-1.5 rounded-full w-full bg-white/90'></div>
                    <div className='flex flex-1 items-center gap-4'>
                        <SkipBack />
                        <Play />
                        <SkipForward />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;