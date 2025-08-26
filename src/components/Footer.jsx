import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            英雄联盟官方网站 · 腾讯游戏 · 攻略中心
          </p>
          <div className="mt-4 space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">关于我们</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">服务条款</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">隐私政策</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">联系我们</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;