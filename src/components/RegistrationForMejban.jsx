
import Image from 'next/image';
import Link from 'next/link';
import RegistrationForm from './RegistrationForm';

const RegistrationForMejban = () => {
    return (
        <div className='flex-row md:flex'>
            <div className='border_shadow mx-2 mt-2 text-center md:w-1/3 '>
                <h2 className='text-2xl font-bold mb-4'>Registration for Mejban</h2>
                <p><span className='font-semibold'>Date :</span>SUNDAY 7 July 2024 (11.00 am to 11.00 pm)</p>
                <p><span className='font-semibold'>Venue :</span>Mayfair Venue Chadwell Health 1078-1082 High Rd Romford, RM6 4BD</p>
                <p><span className='font-semibold'>Entry Fee :</span>£10 (10 Years to Adult) £5 (6 year to 9 years and under 6 years free)</p>
                
                <div>
                    <p className='text-lg font-bold mb-2 mt-4'>Already have registered?</p>
                    <Link href='#' className='rounded-sm mt-2 px-2 py-1 text-white bg-slate-900'><button>See Invitation</button></Link>
                </div>
            </div>
            <div className='border_shadow mx-2 mt-2 md:w-1/3'>
                <RegistrationForm></RegistrationForm>
            </div>
            <div className='border_shadow mx-2 mt-2  md:w-1/3'>
                <img src='/event_details.jpg'/>
            </div>
        </div>
    );
};

export default RegistrationForMejban;