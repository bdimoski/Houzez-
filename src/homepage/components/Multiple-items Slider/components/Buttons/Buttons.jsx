import React from 'react'

const Buttons = ({sliderRef}) => {
    return (
        <div className='buttons h-10 flex justify-end gap-1'>
            <button onClick={()=>sliderRef.current.slickPrev()} className='inline-block bg-transparent text-[#00aeef] border-[1px] border-[#00AEEF] rounded-sm z-1 w-auto h-8 text-xs text-center py-0 px-3 font-light cursor-pointer transition hover:text-white hover:bg-[#00AEEF]'>Prev</button>
            <button onClick={()=>sliderRef.current.slickNext()} className='inline-block bg-transparent text-[#00aeef] border-[1px] border-[#00AEEF] rounded-sm z-1 w-auto h-8 text-xs text-center py-0 px-3 font-light cursor-pointer transition hover:text-white hover:bg-[#00AEEF]'>Next</button>
        </div>
    )
}

export default Buttons