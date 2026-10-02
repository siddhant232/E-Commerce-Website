import React from 'react'

const Account = () => {

    async function getUserProfile(){
        await axios.get("/profile")
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
  return (
    <div className='w-full min-h-screen px-4 sm:px-6 py-8 flex justify-center items-start bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100'>
        <div className='w-full max-w-4xl'>

            {/* ── Section 1: Profile Card ── */}
            <section className='w-full rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/80 overflow-hidden'>

                {/* Gradient Banner */}
                <div className='h-36 bg-gradient-to-r from-slate-700 via-slate-800 to-gray-900 relative'>
                    <div className='absolute inset-0 opacity-20'
                         style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)' }}>
                    </div>
                </div>

                {/* Profile Content */}
                <div className='px-6 sm:px-8 pb-8 -mt-16'>

                    {/* Avatar + Edit Row */}
                    <div className='flex items-end justify-between mb-5'>
                        {/* Avatar with gradient ring */}
                        <div className='relative'>
                            <div className='h-28 w-28 sm:h-32 sm:w-32 rounded-full p-1 bg-white shadow-lg shadow-gray-200/60'>
                                <img
                                    src="https://images.unsplash.com/photo-1519085360753-af034fd7c218?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Profile"
                                    className='h-full w-full rounded-full object-cover border-[3px] border-white'
                                />
                            </div>
                        </div>

                        {/* Edit Button */}
                        <button className='px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-sm font-bold transition-all duration-300 shadow-md shadow-slate-300/50 active:scale-95 flex items-center gap-2 cursor-pointer'>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                            Edit Profile
                        </button>
                    </div>

                    {/* User Info */}
                    <div>
                        <h2 className='text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight'>Siddhant</h2>

                        <div className='flex flex-wrap items-center gap-x-5 gap-y-2 mt-3'>
                            {/* Email */}
                            <span className='flex items-center gap-2 text-sm text-gray-500 font-medium'>
                                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                siddhant@email.com
                            </span>

                            {/* Divider */}
                            <span className='hidden sm:block h-4 w-px bg-gray-300'></span>

                            {/* Phone */}
                            <span className='flex items-center gap-2 text-sm text-gray-500 font-medium'>
                                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                +91 9876543210
                            </span>
                        </div>


                    </div>
                </div>
            </section>

            <section className='w-full rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/80 overflow-hidden'>

                
                <div className='w-full h-86 px-6 sm:px-8 pb-8 p-6'>

                    <div className='w-full h-10 flex items-center justify-between'>

                        <h1 className='font-bold text-xl text-gray-700'>My Addresses</h1>

                    </div>


                    <div className='Address_card w-full h-[90%] px-4 flex items-center justify-between m-2 rounded-xl'>
                        <div className='card-right w-[39%] h-[100%] flex flex-col gap-3 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-50 rounded-xl p-4 border border-gray-200/60 shadow-sm'>
                            <h2 className='flex items-center gap-2 font-semibold text-gray-800 text-base'>
                                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                Address-1
                            </h2>
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                            <p className='w-full break-words text-sm text-gray-600 leading-relaxed'>Mumbai, Andheri West, Link Road, Building No. 42, Floor 3</p>
                            <button className="mt-auto self-end px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-medium rounded-lg transition-all duration-200 active:scale-95 flex items-center gap-1.5 cursor-pointer border border-slate-300/50">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                                Edit
                            </button>
                        </div>


                        <div className='card-right w-[39%] h-[100%] flex flex-col gap-3 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-50 rounded-xl p-4 border border-gray-200/60 shadow-sm'>
                            <h2 className='flex items-center gap-2 font-semibold text-gray-800 text-base'>
                                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                Address-2
                            </h2>
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                            <p className='w-full break-words text-sm text-gray-600 leading-relaxed'>Mumbai, Andheri West, Link Road, Building No. 42, Floor 3</p>
                            <button className="mt-auto self-end px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-medium rounded-lg transition-all duration-200 active:scale-95 flex items-center gap-1.5 cursor-pointer border border-slate-300/50">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
  )
}

export default Account
