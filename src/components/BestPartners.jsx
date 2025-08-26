import React from 'react';

const BestPartners = () => {
  const partners = [
    {
      name: '堕落天使 莫甘娜',
      image: 'https://game.gtimg.cn/images/lol/act/img/champion/Morgana.png',
      pickRate: '4.65%',
      winRate: '58.05%'
    },
    {
      name: '魂锁典狱长 锤石',
      image: 'https://game.gtimg.cn/images/lol/act/img/champion/Thresh.png',
      pickRate: '4.83%',
      winRate: '57.08%'
    },
    {
      name: '爆破鬼才 吉格斯',
      image: 'https://game.gtimg.cn/images/lol/act/img/champion/Ziggs.png',
      pickRate: '4.21%',
      winRate: '56.74%'
    }
  ];

  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">最佳拍档</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition-colors">
              <img 
                src={partner.image} 
                alt={partner.name}
                className="w-16 h-16 mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-lg font-medium text-white mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-400">登场率: {partner.pickRate}</p>
              <p className="text-sm text-green-400">胜率: {partner.winRate}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestPartners;