'use client'
import LoginForm from '@/components/LoginForm';
import React, { useState } from 'react'

const Login = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Open the modal when Sign In is clicked
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Close the modal when the form is submitted
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {/* NavBar */}
            <nav className="w-full h-[10vh] bg-accent flex justify-around items-center">

                <div className="text-secondary">
                    SILVE RING LOGO
                </div>

                <div className="flex gap-[30px]">
                    {["Home", "About", "Features & Benefits", "Future Roadmap", "Contact US"].map((elem, index) => (
                        <li className="list-none text-secondary cursor-pointer" key={index}>{elem}</li>
                    ))}
                </div>

                <div>
                    <button
                        onClick={openModal}
                        className="text-secondary bg-primary rounded-full px-4 py-2">Sign In</button>
                </div>

            </nav>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
                    <div className="bg-transparent rounded-lg  p-6 w-[400px] relative mr-[150px]">
                        <LoginForm
                            onSubmit={() => {
                                alert("Form Submitted");
                                closeModal();
                            }}
                        />
                    </div>
                </div>
            )}
        </div >
    )
}

export default Login;
