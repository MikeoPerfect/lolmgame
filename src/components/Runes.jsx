import React from 'react';

const Runes = () => {
  const primaryRunes = [
    { name: '致命节奏', image: 'https://game.gtimg.cn/images/lol/act/img/rune/LethalTempoTemp.png' },
    { name: '气定神闲', image: 'https://game.gtimg.cn/images/lol/act/img/rune/PresenceOfMind.png' },
    { name: '传说：欢欣', image: 'https://game.gtimg.cn/images/lol/act/img/rune/LegendAlacrity.png' },
    { name: '砍倒', image: 'https://game.gtimg.cn/images/lol/act/img/rune/CutDown.png' }
  ];

  const secondaryRunes = [
    { name: '可怖纪念品', image: 'https://game.gtimg.cn/images/lol/act/img/rune/GrislyMementos.png' },
    { name: '寻宝猎人', image: 'https://game.gtimg.cn/images/lol/act/img/rune/TreasureHunter.png' }
  ];

  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">符文推荐</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">精密</h3>
            <div className="space-y-3">
              {primaryRunes.map((rune, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <img 
                    src={rune.image} 
                    alt={rune.name}
                    className="w-12 h-12 rounded"
                  />
                  <span className="text-white">{rune.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-400">
              登场率: 0.28% | 胜率: 60.13%
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">主宰</h3>
            <div className="space-y-3">
              {secondaryRunes.map((rune, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <img 
                    src={rune.image} 
                    alt={rune.name}
                    className="w-12 h-12 rounded"
                  />
                  <span className="text-white">{rune.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-400">
              登场率: 0.2% | 胜率: 60.67%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Runes;