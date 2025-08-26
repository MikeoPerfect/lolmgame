import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">英雄联盟攻略中心</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">精品攻略</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">峡谷排位</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">大乱斗</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">最佳双排</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">斗魂竞技场</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-sm text-gray-300 hover:text-white">登录</button>
            <button className="text-sm text-gray-300 hover:text-white">注册</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;