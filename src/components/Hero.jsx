import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">战争女神 希维尔</h1>
            <p className="text-xl text-gray-300 mb-2">射手</p>
            <div className="flex items-center space-x-6 mb-6">
              <div>
                <p className="text-sm text-gray-400">胜率</p>
                <p className="text-2xl font-bold text-green-400">52.39%</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">登场率</p>
                <p className="text-2xl font-bold text-blue-400">9.31%</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              添加收藏
            </button>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://game.gtimg.cn/images/lol/act/img/guidetop/guide_4196b22e-0803-4399-815b-1126422949ab.jpg" 
              alt="战争女神 希维尔"
              className="w-full max-w-lg rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;