import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-screen bg-orange-50 flex items-center justify-center">
            <div className="text-center px-4">
                <div className="text-8xl mb-6">🐰🐰🐰🐰🐰🐰🐰🐰</div>
                <h1 className="text-5xl font-extrabold mb-4 text-orange-700">
                    토끼네 당근농장에 오신 걸 환영합니다!
                </h1>
                <p className="text-2xl text-gray-800 mb-8">
                    토끼와 밭을 일구고, 당근을 수확하고, 토끼를 꾸며보세요 🍀
                </p>

                <img
                    src="/bunnys/bunny-get.png"
                    alt="당근을 얻은 토끼"
                    className="mx-auto mb-8 w-[300px] h-auto"
                />

                <button
                    onClick={() => navigate('/game')}
                    className="bg-green-500 hover:bg-green-600 text-white text-xl font-bold px-8 py-4 rounded-2xl shadow-lg transition duration-200"
                >
                    게임 시작하기 ▶
                </button>
            </div>
        </div>
    );
}