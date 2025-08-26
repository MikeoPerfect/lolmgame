import React from 'react';

const Equipment = () => {
  const startingItems = [
    { 
      name: '长剑 + 守护者之刃', 
      image1: 'https://game.gtimg.cn/images/lol/act/img/item/1036.png',
      image2: 'https://game.gtimg.cn/images/lol/act/img/item/3177.png',
      pickRate: '2.08%',
      winRate: '61.98%'
    },
    { 
      name: '暴风之剑', 
      image1: 'https://game.gtimg.cn/images/lol/act/img/item/1038.png',
      pickRate: '13.12%',
      winRate: '55.82%'
    }
  ];

  const coreItems = [
    { 
      name: '夺萃之镰 + 纳沃利烁刃 + 无尽之刃', 
      items: [
        'https://game.gtimg.cn/images/lol/act/img/item/3508.png',
        'https://game.gtimg.cn/images/lol/act/img/item/6675.png',
        'https://game.gtimg.cn/images/lol/act/img/item/3031.png'
      ],
      pickRate: '2.74%',
      winRate: '57.39%'
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">装备推荐</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">出门装</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {startingItems.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <img src={item.image1} alt={item.name} className="w-12 h-12 rounded" />
                  {item.image2 && <img src={item.image2} alt={item.name} className="w-12 h-12 rounded" />}
                  <div>
                    <p className="text-white font-medium">{item.name}</p>
                    <p className="text-sm text-gray-400">登场率: {item.pickRate} | 胜率: {item.winRate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">核心装</h3>
          {coreItems.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4 mb-4">
              <div className="flex items-center space-x-3 mb-2">
                {item.items.map((img, i) => (
                  <img key={i} src={img} alt="item" className="w-12 h-12 rounded" />
                ))}
              </div>
              <p className="text-sm text-gray-400">登场率: {item.pickRate} | 胜率: {item.winRate}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;