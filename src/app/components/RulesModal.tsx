'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon,ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

interface ChildComponentProps {
  src: string
}

const Choice = ({src}:ChildComponentProps)=>{
  return (
    <div className={`flex items-center space-x-2 ${src=="/icon-rock.svg"?"col-span-2":"col-span-1"}`}>
      <div
        key={Math.random()}
        className={`relative rounded-full sm:w-[250px] sm:h-[250px] w-[100px] h-[100px] 
          cursor-pointer overflow-hidden sm:border-[24px] border-[10px] flex justify-center items-center shadow-inner mx-auto`}
      >
        <Image
          src={src}
          alt="rule"
          width={250}
          height={250}
          className="bg-gray-100 object-cover sm:p-14 p-5 max-w-fit filter opacity-75 sm:w-[250px] sm:h-[250px] w-[100px] h-[100px]"
          priority
        />
      </div>
    </div>
  )
}

export default function RulesModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
        <div className='w-full flex sm:justify-end justify-center absolute sm:bottom-12 bottom-10 sm:right-12'>
          <button
          className="text-white text-4xl font-semibold uppercase outline outline-foreground outline-4 
          hover:bg-foreground hover:text-header transition ease-in-out focus:ring-4 px-10 py-3 rounded-md tracking-wide"
          onClick={() => setOpen(true)}
          >
            Rules
          </button>
        </div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-slate-950/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden sm:h-auto sm:w-auto h-screen w-screen md:rounded-2xl bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start sm:p pb-10 pt-5">
                
                <div className="mt-3 text-center sm:px-0 px-8 flex items-center sm:justify-between justify-center w-full sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-5xl font-semibold uppercase text-darktxt">
                    Rules
                  </DialogTitle>
                  <XMarkIcon onClick={() => setOpen(false)} className="cursor-pointer absolute sm:relative sm:inset-0 bottom-10 right-[42.5%] hover:rotate-180 ease-out transition w-12 h-12 text-header" />

                </div>
              </div>
            </div>
            
            <div className='flex items-center justify-center sm:gap-8 gap-2 sm:px-8 px-2 sm:py-8 py-6'>
              <Choice src="/icon-paper.svg"/>
              <div className='flex flex-col items-center'>
                <h2 className='uppercase font-bold sm:text-3xl text-xl text-gray-300'>Beats</h2>
                <ArrowLongLeftIcon className="mx-auto w-24 h-24" color='gray'/>
              </div>
              <Choice src="/icon-scissors.svg"/>
            </div>

            <div className='mx-auto flex justify-center items-center sm:gap-40 gap-4'>
              <div className='flex items-center'>
                <h2 className='uppercase font-bold sm:text-3xl text-xl text-gray-300'>Beats</h2>
                <ArrowLongRightIcon className="mx-auto w-24 h-24 rotate-45" color='gray'/>
              </div>
              <div className='flex items-center'>
                <ArrowLongRightIcon className="mx-auto w-24 h-24 -rotate-45" color='gray'/>
                <h2 className='uppercase font-bold sm:text-3xl text-xl text-gray-300'>Beats</h2>
              </div>
            </div>

            <div className='mx-auto px-8 sm:py-8 py6 gap-40'>
             <Choice src="/icon-rock.svg"/>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
    </>
  )
}
