import React from 'react'

const MagicButton = ({title, icon, position, handleClick, otherClasses}:{title:string, icon: React.ReactNode, position:string; handleClick?: () => void; otherClasses?:string;}) => {
    return (
        
        // Button code
        <a
        href="/AlMajali-Resume.pdf"
        download="AlMajali-Resume.pdf" className="sm:px-8 sm:py-4 px-4 py-2 text-xs rounded-full bg-[#0D0628] font-bold text-[#E9C6DD] tracking-widest uppercase sm:text-sm transform hover:scale-105 hover:bg-[#333DEF] transition-colors duration-200">
  download my resume
</a>
      
    )
}

export default MagicButton


