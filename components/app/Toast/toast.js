import { Toaster } from 'sonner'
import { AiOutlineCheckCircle } from 'react-icons/ai'


const Toast = () => {
    return (
        <Toaster position="bottom-center" toastOptions={{
            style: { marginLeft:"100px", border: 'none',borderRadius: '15px',color: 'white', backgroundColor: 'rgba(0,0,0,0.9)',backdropFilter: 'blur(20px)', width:"fit-content", padding:"10px", display:"flex", justifyContent:"center", alignItems:"center"}, 
            icon: <AiOutlineCheckCircle size={20} /> 
        }}/>
    )
} 

export default Toast