import React from 'react';

const Skills = () => {
  const skills = [
    {
      name: '敏锐疾行',
      image: 'https://game.gtimg.cn/images/lol/act/img/passive/Sivir_Passive.png',
      type: '被动'
    },
    {
      name: '回旋之刃',
      image: 'https://game.gtimg.cn/images/lol/act/img/spell/SivirQ.png',
      type: 'Q'
    },
    {
      name: '弹射',
      image: 'https://game.gtimg.cn/images/lol/act/img/spell/SivirW.png',
      type: 'W'
    },
    {
      name: '法术护盾',
      image: 'https://game.gtimg.cn/images/lol/act/img/spell/SivirE.png',
      type: 'E'
    },
    {
      name: '狩猎',
      image: 'https://game.gtimg.cn/images/lol/act/img/spell/SivirR.png',
      type: 'R'
    }
  ];

  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">技能介绍</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-4 text-center hover:bg-gray-600 transition-colors">
              <img 
                src={skill.image} 
                alt={skill.name}
                className="w-16 h-16 mx-auto mb-2 rounded"
              />
              <h3 className="text-sm font-medium text-white">{skill.name}</h3>
              <p className="text-xs text-gray-400">{skill.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;